import axios from 'axios';
import { useState, useEffect } from 'react';
import { orderService } from 'src/services/order/order.service';
import {
	ExtendedOrder,
	ExtendedOrderDetail,
	Order,
} from 'src/services/order/order.types';
import { useAsync } from 'src/shared/hooks/useAsync';
import { toast } from 'src/shared/utils/toast';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/modules/navigation/types';

export const useOrderDetail = (orderId: string, orderDetailId: string) => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const [orderDetail, setOrderDetail] = useState<ExtendedOrderDetail | null>(
		null,
	);
	const [selectedCount, setSelectedCount] = useState(0);

	const fetchOrderDetail = async () => {
		try {
			const orderDetail = await orderService.getOrderDetailById(
				orderId,
				orderDetailId,
			);

			setOrderDetail(orderDetail);
			setSelectedCount(orderDetail?.quantity);
		} catch (e: unknown) {
			if (axios.isAxiosError(e)) {
				toast.error(e.response?.data?.message);
			}
		}
	};

	const increment = () => {
		if (orderDetail && selectedCount < orderDetail.product.quantity) {
			setSelectedCount((prev) => prev + 1);
		}
	};

	const decrement = () => {
		if (orderDetail && selectedCount > 0) {
			setSelectedCount((prev) => prev - 1);
		}
	};

	const changeQuantity = async (newQuantity: number) => {
		try {
			await orderService.changeQuantityInOrder(
				orderId,
				orderDetailId,
				newQuantity,
			);
		} catch (e: unknown) {
			if (axios.isAxiosError(e)) {
				toast.error(e.response?.data?.message);
			}
		}
	};

	const remove = async () => {
		if (orderDetail) {
			try {
				await changeQuantity(0);

				navigation.navigate(NAVIGATION_KEYS.ORDER_DETAILS, { orderId });
			} catch (e: unknown) {
				console.error(e);
				if (axios.isAxiosError(e)) {
					toast.error(e.response?.data?.message);
				}
			}
		}
	};

	const save = () => {
		if (orderDetail) {
			if (selectedCount === 0) {
				remove();
			} else {
				changeQuantity(selectedCount);
			}
		}
	};

	const { loading: loadingOrderDetail, execute: executeFetchOrderDetail } =
		useAsync(fetchOrderDetail);

	useEffect(() => {
		executeFetchOrderDetail();
	}, [orderId, orderDetailId]);

	return {
		orderDetail,
		loadingOrderDetail,
		selectedCount,
		increment,
		decrement,
		save,
		remove,
	};
};
