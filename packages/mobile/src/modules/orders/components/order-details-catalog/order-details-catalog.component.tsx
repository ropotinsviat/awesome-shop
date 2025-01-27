import * as React from 'react';
import { FlatList, View, Text, ActivityIndicator } from 'react-native';
import { styles } from './order-details-catalog.styles';
import { CartCard } from '../../../../shared/componetnts/cards/cart-card';
import { useCart } from 'src/modules/cart/hooks/useCart';
import { Button } from 'src/shared/componetnts/button';
import { Subtitle } from 'src/shared/componetnts/texts/subtitle';
import { useCartStore } from 'src/store/cart.store';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/modules/navigation/types';
import { useOrder } from '../../hooks/useOrder';
import PayIcon from 'assets/svg/pay';

interface OrderDetailsCatalogProps {
	orderId: string;
}

export const OrderDetailsCatalog = ({ orderId }: OrderDetailsCatalogProps) => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const { order, loadingOrder, payLoading, executePay, removeFromOrder } =
		useOrder(orderId);

	const orderEmpty = order?.orderDetails.length === 0;
	const canPay = order?.paymentStatus === 'PENDING';

	const navigateToOrderDetailItem = (orderDetailId: string) =>
		navigation.navigate(NAVIGATION_KEYS.EDIT_ORDER_DETAIL, {
			orderId,
			orderDetailId,
			canEdit: canPay,
		});

	return (
		<>
			{!loadingOrder && order ? (
				<>
					<View style={styles.top}>
						<Text style={styles.totalAmount}>
							Total amount: ${order?.totalAmount.toFixed(2)}
						</Text>
					</View>

					<FlatList
						style={styles.list}
						data={order?.orderDetails}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<CartCard
								name={item.product.name}
								total={Number(
									(
										item.product.price * item.quantity
									).toFixed(2),
								)}
								quantity={item.quantity}
								onPress={() =>
									navigateToOrderDetailItem(item.id)
								}
								onCanPress={
									canPay
										? () => removeFromOrder(item.id)
										: undefined
								}
							/>
						)}
						ListEmptyComponent={
							<Subtitle text="Your order is empty!" />
						}
					/>
					{canPay && (
						<Button
							extraButtonStyles={styles.button}
							title="Pay"
							onPress={executePay}
							loading={payLoading}
							disabled={orderEmpty}
						>
							<PayIcon width={25} height={25} />
						</Button>
					)}
				</>
			) : (
				<View style={styles.loader}>
					<ActivityIndicator size={'large'} />
				</View>
			)}
		</>
	);
};
