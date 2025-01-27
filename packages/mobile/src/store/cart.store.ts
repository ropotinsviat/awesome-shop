import { Product } from 'src/services/product/product.types';
import { create } from 'zustand';

export type CartItem = {
	product: Product;
	quantity: number;
};

type CartStore = {
	cart: CartItem[];
	add: (product: Product, quantity: number) => void;
	remove: (product: Product) => void;
	setQuantity: (product: Product, quantity: number) => void;
	reset: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
	cart: [],

	add: (product, quantity) =>
		set((state) => {
			const existingItem = state.cart.find(
				(item) => item.product.id === product.id,
			);

			if (existingItem) {
				return {
					cart: state.cart.map((item) =>
						item.product.id === product.id
							? { ...item, quantity: item.quantity + quantity }
							: item,
					),
				};
			}

			return { cart: [...state.cart, { product, quantity }] };
		}),

	remove: (product) =>
		set((state) => ({
			cart: state.cart.filter((item) => item.product.id !== product.id),
		})),

	setQuantity: (product, quantity) =>
		set((state) => {
			const existingItem = state.cart.find(
				(item) => item.product.id === product.id,
			);
			if (existingItem) {
				return {
					cart: state.cart.map((item) =>
						item.product.id === product.id
							? { ...item, quantity }
							: item,
					),
				};
			}
			return { cart: [...state.cart, { product, quantity }] };
		}),

	reset: () =>
		set(() => {
			return { cart: [] };
		}),
}));
