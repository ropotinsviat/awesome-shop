import { CartItem } from '../types';

export function calcOrderPrice(cartItems: CartItem[]) {
	return cartItems.reduce(
		(sum, item) => sum + item.product.price * item.quantity,
		0,
	);
}
