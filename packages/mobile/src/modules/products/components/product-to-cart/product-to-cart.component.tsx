import * as React from 'react';
import { Text, View } from 'react-native';
import { styles } from './product-to-cart.styles';
import { Product } from 'src/services/product/product.types';
import { Button } from 'src/shared/componetnts/button';
import { IndentLayout } from 'src/shared/componetnts/layouts/indent-layout';
import { ProductInfo } from '../../../../shared/componetnts/product-info';
import { Counter } from 'src/shared/componetnts/counter';
import { useAddToCart } from '../../hooks/useAddToCart';

interface ProductToCardProps {
	product: Product;
}

export const ProductToCart = ({ product }: ProductToCardProps) => {
	const {
		selectedCount,
		increment,
		decrement,
		addToCart,
		remainingQuantity,
	} = useAddToCart(product);

	return (
		<IndentLayout>
			<View>
				<ProductInfo product={product} />
				<Counter
					count={selectedCount}
					onIncrement={increment}
					onDecrement={decrement}
				/>
			</View>

			<Button
				extraButtonStyles={styles.button}
				title="Add to Cart"
				onPress={addToCart}
				disabled={!remainingQuantity}
			/>
		</IndentLayout>
	);
};
