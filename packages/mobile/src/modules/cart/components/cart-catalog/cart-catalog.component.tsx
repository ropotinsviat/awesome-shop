import * as React from 'react';
import { FlatList, View, Text } from 'react-native';
import { styles } from './cart-catalog.styles';
import { CartCard } from '../../../../shared/componetnts/cards/cart-card';
import { useCart } from '../../hooks/useCart';
import { Button } from 'src/shared/componetnts/button';
import { Subtitle } from 'src/shared/componetnts/texts/subtitle';
import { useCartStore } from 'src/store/cart.store';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/modules/navigation/types';

export const CartCatalog = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const { cart, totalAmount, createOrder } = useCart();

	const cartEmpty = cart.length === 0;

	const removeFromCart = useCartStore((state) => state.remove);

	const navigateToCartItem = (productId: string) =>
		navigation.navigate(NAVIGATION_KEYS.EDIT_CART, { productId });

	return (
		<>
			<View style={styles.top}>
				<Text style={styles.totalAmount}>
					Total amount: ${totalAmount}
				</Text>
			</View>

			<FlatList
				style={styles.list}
				data={cart}
				keyExtractor={(item) => item.product.id}
				renderItem={({ item }) => (
					<CartCard
						name={item.product.name}
						total={Math.round(item.product.price * item.quantity)}
						quantity={item.quantity}
						onPress={() => navigateToCartItem(item.product.id)}
						onCanPress={() => removeFromCart(item.product)}
					/>
				)}
				ListEmptyComponent={
					<Subtitle text="Your cart is empty. Start shopping now!" />
				}
			/>

			<Button
				extraButtonStyles={styles.button}
				title="Create Order"
				onPress={createOrder}
				disabled={cartEmpty}
			/>
		</>
	);
};
