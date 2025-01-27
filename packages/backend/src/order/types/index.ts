import { Order, OrderDetail, Product } from '@prisma/client';

export interface CartItem {
	product: Product;
	quantity: number;
}

export interface ExtendedOrderDetail extends OrderDetail {
	product: Product;
}

export interface ExtendedOrder extends Order {
	orderDetails: ExtendedOrderDetail[];
}
