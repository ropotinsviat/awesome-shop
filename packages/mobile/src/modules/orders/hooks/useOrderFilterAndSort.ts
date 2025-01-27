import { useState } from 'react';
import {
	DeliveryStatusOption,
	PaymentStatusOption,
	SortOption,
} from '../constants';

export const useOrderFilterAndSort = () => {
	const [paymentStatus, setPaymentStatus] =
		useState<PaymentStatusOption>('All');

	const [deliveryStatus, setDeliveryStatus] =
		useState<DeliveryStatusOption>('All');

	const [sortOrder, setSortOrder] = useState<SortOption>('Asc');

	return {
		paymentStatus,
		setPaymentStatus,
		deliveryStatus,
		setDeliveryStatus,
		sortOrder,
		setSortOrder,
	};
};
