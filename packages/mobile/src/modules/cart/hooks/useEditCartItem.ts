import { useState } from 'react';
import { useCartStore } from 'src/store/cart.store';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/modules/navigation/types';

export const useEditCartItem = (productId: string) => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const cart = useCartStore((state) => state.cart);
	const setCartQuantity = useCartStore((state) => state.setQuantity);
	const removeFromCart = useCartStore((state) => state.remove);

	const cartItem = cart.find((item) => item.product.id === productId);
	const product = cartItem?.product;
	const cartQuantity = cartItem?.quantity || 0;

	const [selectedCount, setSelectedCount] = useState(cartQuantity);

	const increment = () => {
		if (product && selectedCount < product.quantity) {
			setSelectedCount((prev) => prev + 1);
		}
	};

	const decrement = () => {
		if (product && selectedCount > 0) {
			setSelectedCount((prev) => prev - 1);
		}
	};

	const remove = () => {
		if (product) {
			removeFromCart(product);
			navigation.navigate(NAVIGATION_KEYS.CART);
		}
	};

	const save = () => {
		if (product) {
			if (selectedCount === 0) {
				remove();
			} else {
				setCartQuantity(product, selectedCount);
			}
		}
	};

	return { selectedCount, increment, decrement, save, remove, product };
};
