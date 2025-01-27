import { HttpFactoryService } from 'src/shared/services/http-factory.service';
import { EnhancedWithAuthHttpService } from 'src/shared/services/http-auth.service';
import {
	ExtendedOrder,
	ExtendedOrderDetail,
	Order,
	QueryOrdersBody,
} from './order.types';
import { ApiResponse } from 'src/shared/types';
import { CartItem } from 'src/store/cart.store';

class OrderService {
	constructor(private readonly httpService: EnhancedWithAuthHttpService) {}

	getMany(query: QueryOrdersBody): Promise<Order[]> {
		return this.httpService.get('orders/user', { params: query });
	}

	getById(id: string): Promise<ExtendedOrder | null> {
		return this.httpService.get(`orders/user/${id}`);
	}

	getOrderDetailById(
		orderId: string,
		orderDetailId: string,
	): Promise<ExtendedOrderDetail> {
		return this.httpService.get(
			`orders/user/${orderId}/order-details/${orderDetailId}`,
		);
	}

	create(cart: CartItem[]): Promise<ApiResponse> {
		return this.httpService.post(`orders/user`, { cart });
	}

	changeQuantityInOrder(
		orderId: string,
		orderDetailId: string,
		newQuantity: number,
	): Promise<ApiResponse> {
		return this.httpService.put(
			`orders/user/${orderId}/order-details/${orderDetailId}`,
			{ newQuantity },
		);
	}

	pay(orderId: string): Promise<ApiResponse> {
		return this.httpService.post(`orders/user/${orderId}/payments`, {});
	}
}

export const orderService = new OrderService(
	new HttpFactoryService().createAuthHttpService(),
);
