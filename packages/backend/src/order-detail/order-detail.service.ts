import { CartItem, ExtendedOrderDetail } from '@/order/types';
import { ProductService } from '@/product/product.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { OrderDetail, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class OrderDetailService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly productService: ProductService,
	) {}

	async getOne(id: string): Promise<ExtendedOrderDetail> {
		return this.prisma.orderDetail.findUniqueOrThrow({
			where: { id },
			include: { product: true },
		});
	}

	async createMany(
		prisma: Prisma.TransactionClient,
		orderId: string,
		cartItems: CartItem[],
	): Promise<void> {
		const orderDetails = await Promise.all(
			cartItems.map(async (item) => {
				await this.productService.updateProductQuantity(
					prisma,
					item.product.id,
					-item.quantity,
				);

				return {
					orderId,
					productId: item.product.id,
					quantity: item.quantity,
					priceAtPurchase: item.product.price,
				};
			}),
		);

		await prisma.orderDetail.createMany({ data: orderDetails });
	}

	async changeQuantity(
		prisma: Prisma.TransactionClient,
		orderId: string,
		orderDetailId: string,
		newQuantity: number,
	): Promise<ExtendedOrderDetail> {
		const orderDetail = await prisma.orderDetail.findFirstOrThrow({
			where: { id: orderDetailId, orderId },
			include: { product: true },
		});

		const quantityDifference = newQuantity - orderDetail.quantity;

		if (newQuantity === 0) {
			await this.productService.updateProductQuantity(
				prisma,
				orderDetail.productId,
				orderDetail.quantity,
			);

			await prisma.orderDetail.delete({ where: { id: orderDetailId } });
		} else {
			await this.productService.updateProductQuantity(
				prisma,
				orderDetail.productId,
				-quantityDifference,
			);

			await prisma.orderDetail.update({
				where: { id: orderDetailId },
				data: { quantity: newQuantity },
			});
		}

		return orderDetail;
	}
}
