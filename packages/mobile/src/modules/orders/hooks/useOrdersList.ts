import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { orderService } from 'src/services/order/order.service';
import { Order } from 'src/services/order/order.types';
import { useAsync } from 'src/shared/hooks/useAsync';
import { toast } from 'src/shared/utils/toast';
import {
	DeliveryStatusOption,
	PaymentStatusOption,
	SortOption,
} from '../constants';
import {
	mapDeliveryFilterToStatus,
	mapPaymentFilterToStatus,
	mapSortOptionToOrder,
} from '../utils/option-value.util';

export function useOrdersList(
	selectedPaymentStatus: PaymentStatusOption,
	selectedDeliveryStatus: DeliveryStatusOption,
	selectedSortOrder: SortOption,
) {
	const [orders, setOrders] = useState<Order[]>([]);

	const currPage = useRef(1);
	const reachedEnd = useRef(false);

	const paymentStatus = mapPaymentFilterToStatus(selectedPaymentStatus);
	const deliveryStatus = mapDeliveryFilterToStatus(selectedDeliveryStatus);
	const sortOrder = mapSortOptionToOrder(selectedSortOrder);

	const fetchOrders = async () => {
		try {
			currPage.current = 1;
			reachedEnd.current = false;

			const orders = await orderService.getMany({
				paymentStatus,
				deliveryStatus,
				sortOrder,
				page: 1,
			});

			setOrders(orders);
		} catch (e: unknown) {
			if (axios.isAxiosError(e)) {
				toast.error(e.response?.data?.message);
			}
		}
	};

	const nextPage = async () => {
		if (reachedEnd.current || loadingNextPage) return;

		try {
			const newOrders = await orderService.getMany({
				paymentStatus,
				deliveryStatus,
				sortOrder,
				page: ++currPage.current,
			});

			if (newOrders.length < 10) {
				reachedEnd.current = true;
			}

			setOrders((prev) => [...prev, ...newOrders]);
		} catch (e: unknown) {
			if (axios.isAxiosError(e)) {
				toast.error(e.response?.data?.message);
			}
		}
	};

	const { loading: loadingOrders, execute: executeFetchOrders } =
		useAsync(fetchOrders);

	const { loading: loadingNextPage, execute: executeNextPage } =
		useAsync(nextPage);

	const handleFetchOrders = () => {
		executeFetchOrders();
	};

	const handleNextPage = () => {
		executeNextPage();
	};

	useEffect(() => {
		handleFetchOrders();
	}, [selectedPaymentStatus, selectedDeliveryStatus, selectedSortOrder]);

	return {
		orders,
		loadingOrders,
		loadingNextPage,
		handleFetchOrders,
		handleNextPage,
	};
}
