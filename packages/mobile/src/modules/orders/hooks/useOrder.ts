import axios from 'axios';
import { useEffect, useState } from 'react';
import { orderService } from 'src/services/order/order.service';
import { ExtendedOrder } from 'src/services/order/order.types';
import { useAsync } from 'src/shared/hooks/useAsync';
import { toast } from 'src/shared/utils/toast';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/modules/navigation/types';

export function useOrder(orderId: string) {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	const [order, setOrder] = useState<ExtendedOrder | null>(null);

	const fetchOrder = async () => {
		try {
			const order = await orderService.getById(orderId);
			setOrder(order);
		} catch (e: unknown) {
			if (axios.isAxiosError(e)) {
				toast.error(e.response?.data?.message);
			}
		}
	};

	const removeFromOrder = async (orderDetailId: string) => {
		try {
			await orderService.changeQuantityInOrder(orderId, orderDetailId, 0);
		} catch (e: unknown) {
			if (axios.isAxiosError(e)) {
				toast.error(e.response?.data?.message);
			}
		}
		await fetchOrder();
	};

	const pay = async () => {
		try {
			await orderService.pay(orderId);
			navigation.navigate(NAVIGATION_KEYS.PAYMENT_SUCCESS, { orderId });
		} catch (e: unknown) {
			if (axios.isAxiosError(e)) {
				toast.error(e.response?.data?.message);
			}
		}
	};

	const { loading: loadingOrder, execute: executeFetchOrder } =
		useAsync(fetchOrder);

	const { loading: payLoading, execute: executePay } = useAsync(pay);

	useEffect(() => {
		executeFetchOrder();
	}, [orderId]);

	return { order, loadingOrder, payLoading, executePay, removeFromOrder };
}
