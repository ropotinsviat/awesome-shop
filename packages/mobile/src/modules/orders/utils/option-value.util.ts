import { DeliveryStatus, PaymentStatus } from 'src/services/order/order.types';
import {
	DeliveryStatusOption,
	PaymentStatusOption,
	SortOption,
} from '../constants';
import { SortOrder } from 'src/services/product/product.types';

export function mapPaymentFilterToStatus(
	option: PaymentStatusOption,
): PaymentStatus | null {
	switch (option) {
		case 'Pending':
			return 'PENDING';
		case 'Complete':
			return 'COMPLETE';
		case 'Failed':
			return 'FAILED';
		case 'All':
		default:
			return null;
	}
}

export function mapDeliveryFilterToStatus(
	option: DeliveryStatusOption,
): DeliveryStatus | null {
	switch (option) {
		case 'Pending':
			return 'PENDING';
		case 'In Transit':
			return 'IN_TRANSIT';
		case 'Delivered':
			return 'DELIVERED';
		case 'All':
		default:
			return null;
	}
}

export function mapSortOptionToOrder(option: SortOption): SortOrder {
	switch (option) {
		case 'Asc':
			return 'asc';
		case 'Desc':
			return 'desc';
		default:
			return null;
	}
}
