import { GetUser } from '@/auth/decorators/get-user.decorator';
import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	Query,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from '@prisma/client';
import { CreateOrderDto } from './dto/create-order.dto';
import { ApiResponse } from '@/shared/types';
import { ExtendedOrder, ExtendedOrderDetail } from './types';
import { QueryOrdersDto } from './dto/query-orders.dto';

@Controller('orders')
export class OrderController {
	constructor(private readonly orderService: OrderService) {}

	@Get('user')
	async getUserOrders(
		@GetUser('id') userId: string,
		@Query() query: QueryOrdersDto,
	): Promise<Order[]> {
		return this.orderService.getUserOrders(
			userId,
			query.page,
			query.limit,
			{
				paymentStatus: query.paymentStatus,
				deliveryStatus: query.deliveryStatus,
			},
			query.sortOrder,
		);
	}

	@Get('user/:id')
	async getOrderById(
		@GetUser('sub') userId: string,
		@Param('id') orderId: string,
	): Promise<ExtendedOrder | null> {
		return this.orderService.getOrder(userId, orderId);
	}

	@Get('user/:orderId/order-details/:id')
	async getOrderDetail(
		@GetUser('sub') userId: string,
		@Param('orderId') orderId: string,
		@Param('id') orderDetailId: string,
	): Promise<ExtendedOrderDetail> {
		return this.orderService.getOrderDetail(userId, orderId, orderDetailId);
	}

	@Post('user')
	async createOrder(
		@GetUser('sub') userId: string,
		@Body() createOrderDto: CreateOrderDto,
	): Promise<ApiResponse> {
		return this.orderService.createOrder(userId, createOrderDto.cart);
	}

	@Put('user/:orderId/order-details/:id')
	async changeQuantityInOrder(
		@GetUser('sub') userId: string,
		@Param('orderId') orderId: string,
		@Param('id') orderDetailId: string,
		@Body('newQuantity') newQuantity: number,
	): Promise<ApiResponse> {
		return this.orderService.changeQuantityInOrder(
			userId,
			orderId,
			orderDetailId,
			Number(newQuantity),
		);
	}

	@Post('user/:id/payments')
	async pay(
		@GetUser('sub') userId: string,
		@Param('id') orderId: string,
	): Promise<ApiResponse> {
		return this.orderService.pay(userId, orderId);
	}
}
