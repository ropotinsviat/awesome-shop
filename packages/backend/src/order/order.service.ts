import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DeliveryStatus, Order, PaymentStatus } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { CartItem, ExtendedOrder, ExtendedOrderDetail } from './types';
import { calcOrderPrice } from './utils/calc-order-price.util';
import { OrderDetailService } from '@/order-detail/order-detail.service';
import { ApiResponse } from '@/shared/types';
import { PaymentService } from '@/payment/payment.service';

@Injectable()
export class OrderService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly orderDetailService: OrderDetailService,
		private readonly paymentService: PaymentService,
	) {}

	async getUserOrders(
		userId: string,
		page: number = 1,
		pageSize: number = 10,
		filters?: {
			paymentStatus?: PaymentStatus;
			deliveryStatus?: DeliveryStatus;
		},
		sortByDate: 'asc' | 'desc' = 'desc',
	): Promise<Order[]> {
		const skip = (page - 1) * pageSize;

		return this.prisma.order.findMany({
			where: {
				userId,
				...(filters?.paymentStatus && {
					paymentStatus: filters.paymentStatus,
				}),
				...(filters?.deliveryStatus && {
					deliveryStatus: filters.deliveryStatus,
				}),
			},
			skip,
			take: pageSize,
			orderBy: { createdAt: sortByDate },
		});
	}

	async getOrder(userId: string, orderId: string): Promise<ExtendedOrder> {
		return this.prisma.order.findFirstOrThrow({
			where: { userId: String(userId), id: orderId },
			include: { orderDetails: { include: { product: true } } },
		});
	}

	async getOrderDetail(
		userId: string,
		orderId: string,
		orderDetailId: string,
	): Promise<ExtendedOrderDetail> {
		await this.checkIfUserCanPerform(userId, orderId);

		return this.orderDetailService.getOne(orderDetailId);
	}

	async createOrder(
		userId: string,
		cartItems: CartItem[],
	): Promise<ApiResponse> {
		const totalAmount = calcOrderPrice(cartItems);

		return this.prisma.$transaction(async (prisma) => {
			const newOrder = await prisma.order.create({
				data: { userId: String(userId), totalAmount },
			});

			await this.orderDetailService.createMany(prisma, newOrder.id, cartItems);

			return { message: 'Successfully created order' };
		});
	}

	async checkIfUserCanPerform(userId: string, orderId: string): Promise<Order> {
		const order = await this.getOrder(userId, orderId);

		if (order?.userId !== userId) {
			throw new HttpException(
				'You cannot perform this action',
				HttpStatus.UNAUTHORIZED,
			);
		}

		return order;
	}

	async changeQuantityInOrder(
		userId: string,
		orderId: string,
		orderDetailId: string,
		newQuantity: number,
	): Promise<ApiResponse> {
		await this.checkIfUserCanPerform(userId, orderId);

		return this.prisma.$transaction(async (prisma) => {
			const orderDetail = await this.orderDetailService.changeQuantity(
				prisma,
				orderId,
				orderDetailId,
				newQuantity,
			);

			const oldAmount = orderDetail.quantity * orderDetail.priceAtPurchase;
			const newAmount = newQuantity * orderDetail.priceAtPurchase;
			const amountChange = newAmount - oldAmount;

			await prisma.order.update({
				where: { id: orderId },
				data: { totalAmount: { increment: amountChange } },
			});

			return { message: 'Successfully deleted from order' };
		});
	}

	async pay(userId: string, orderId: string): Promise<ApiResponse> {
		const order = await this.checkIfUserCanPerform(userId, orderId);

		return this.prisma.$transaction(async (prisma) => {
			const payment = await this.paymentService.create(prisma, order);

			await prisma.order.update({
				where: { id: orderId },
				data: { paymentStatus: payment.paymentStatus },
			});

			return { message: 'Successfully payed for order' };
		});
	}
}
