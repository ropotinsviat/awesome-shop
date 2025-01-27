import { Product, SortOrder } from '../product/product.types';

export type PaymentStatus = 'COMPLETE' | 'FAILED' | 'PENDING';

export type DeliveryStatus = 'PENDING' | 'IN_TRANSIT' | 'DELIVERED';

export type Order = {
	id: string;
	userId: string;
	totalAmount: number;
	paymentStatus: PaymentStatus;
	deliveryStatus: DeliveryStatus;
	createdAt: Date;
	updatedAt: Date;
};

export type QueryOrdersBody = {
	paymentStatus: PaymentStatus | null;
	deliveryStatus: DeliveryStatus | null;
	sortOrder: SortOrder;
	page?: number;
	limit?: number;
};

export type OrderDetail = {
	id: string;
	quantity: number;
	orderId: string;
	productId: string;
	priceAtPurchase: number;
};

export type ExtendedOrderDetail = OrderDetail & {
	product: Product;
};

export type ExtendedOrder = Order & {
	orderDetails: ExtendedOrderDetail[];
};
