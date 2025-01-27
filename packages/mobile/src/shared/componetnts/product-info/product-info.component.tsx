import * as React from 'react';
import { Text, View } from 'react-native';
import { styles } from './product-info.styles';
import { Product } from 'src/services/product/product.types';

interface ProductInfoProps {
	product: Product | null;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.textBlock}>
				<Text style={styles.strongText}>Name:</Text>
				<Text style={styles.plainText}>{product?.name}</Text>
			</View>

			<View style={styles.textBlock}>
				<Text style={styles.strongText}>Description:</Text>
				<Text style={styles.plainText}>{product?.description}</Text>
			</View>

			<View style={styles.textBlock}>
				<Text style={styles.strongText}>In stock:</Text>
				<Text style={styles.plainText}>{product?.quantity}</Text>
			</View>

			<View style={styles.textBlock}>
				<Text style={styles.strongText}>Price:</Text>
				<Text style={styles.plainText}>${product?.price}</Text>
			</View>

			<View style={styles.textBlock}>
				<Text style={styles.strongText}>Category:</Text>
				<Text style={styles.plainText}>{product?.category}</Text>
			</View>

			<View style={styles.textBlock}>
				<Text style={styles.strongText}>Amount:</Text>
			</View>
		</View>
	);
};
