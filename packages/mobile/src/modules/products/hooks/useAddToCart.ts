import { useState, useEffect } from 'react';
import { Product } from 'src/services/product/product.types';
import { useCartStore } from 'src/store/cart.store';

export function useAddToCart(product: Product) {
	const [selectedCount, setSelectedCount] = useState(0);
	const cart = useCartStore((state) => state.cart);
	const addToCartStore = useCartStore((state) => state.add);

	const cartQuantity =
		cart.find((item) => item.product.id === product.id)?.quantity || 0;
	const remainingQuantity = product.quantity - cartQuantity;

	const increment = () => {
		if (selectedCount < remainingQuantity) {
			setSelectedCount((prev) => prev + 1);
		}
	};

	const decrement = () => {
		if (selectedCount > 0) {
			setSelectedCount((prev) => prev - 1);
		}
	};

	const addToCart = () => {
		if (selectedCount > 0) {
			addToCartStore(product, selectedCount);
			setSelectedCount(0);
		}
	};

	useEffect(() => {
		if (selectedCount > remainingQuantity) {
			setSelectedCount(remainingQuantity);
		}
	}, [remainingQuantity]);

	return {
		selectedCount,
		increment,
		decrement,
		addToCart,
		remainingQuantity,
	};
}
