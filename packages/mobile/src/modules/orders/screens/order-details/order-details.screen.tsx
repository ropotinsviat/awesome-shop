import React from 'react';
import { Header } from 'src/shared/componetnts/header';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/modules/navigation/types';
import { authService } from 'src/services/auth/auth.service';
import { Layout } from 'src/shared/componetnts/layouts/layout';
import { OrderDetailsCatalog } from '../../components/order-details-catalog';

type OrderDetailRouteProp = RouteProp<
	RootStackParamList,
	NAVIGATION_KEYS.ORDER_DETAILS
>;

export const OrderDetailsScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const route = useRoute<OrderDetailRouteProp>();
	const { orderId } = route.params;

	const goToOrders = () =>
		navigation.navigate(NAVIGATION_KEYS.BOTTOMTABS, {
			screen: NAVIGATION_KEYS.ORDERS,
		});

	return (
		<Layout>
			<Header title="Order Details" onBackPress={goToOrders} />

			<OrderDetailsCatalog orderId={orderId} />
		</Layout>
	);
};
