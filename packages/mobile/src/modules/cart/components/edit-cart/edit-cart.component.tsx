import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './edit-cart.styles';
import { Product } from 'src/services/product/product.types';
import { Button } from 'src/shared/componetnts/button';
import { IndentLayout } from 'src/shared/componetnts/layouts/indent-layout';
import { ProductInfo } from '../../../../shared/componetnts/product-info';
import { Counter } from 'src/shared/componetnts/counter';
import { useEditCartItem } from '../../hooks/useEditCartItem';

interface EditCartProps {
	productId: string;
}

export const EditCart = ({ productId }: EditCartProps) => {
	const { product, selectedCount, increment, decrement, save, remove } =
		useEditCartItem(productId);

	return (
		<IndentLayout>
			<View>
				{product && <ProductInfo product={product} />}
				<Counter
					count={selectedCount}
					onIncrement={increment}
					onDecrement={decrement}
				/>

				<Pressable onPress={remove}>
					<Text style={styles.removeFromCart}>
						Remove from the cart
					</Text>
				</Pressable>
			</View>

			<Button
				extraButtonStyles={styles.button}
				title="Save"
				onPress={save}
			/>
		</IndentLayout>
	);
};
