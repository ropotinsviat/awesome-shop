import { useMemo } from 'react';
import { orderService } from 'src/services/order/order.service';
import { useAsync } from 'src/shared/hooks/useAsync';
import { toast } from 'src/shared/utils/toast';
import { useCartStore } from 'src/store/cart.store';

export const useCart = () => {
	const cart = useCartStore((state) => state.cart);
	const resetCart = useCartStore((state) => state.reset);

	const totalAmount = useMemo(
		() =>
			Math.round(
				cart.reduce(
					(sum, product) =>
						sum + product.product.price * product.quantity,
					0,
				),
			),
		[cart],
	);

	const { loading, execute: createOrder } = useAsync(async () => {
		const response = await orderService.create(cart);
		toast.success(response.message);
		resetCart();
	});

	return { cart, totalAmount, createOrder, loading };
};
