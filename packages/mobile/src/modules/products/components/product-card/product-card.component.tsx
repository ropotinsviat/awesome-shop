import { Pressable, Text, View } from 'react-native';
import { styles } from './product-card.styles';
import { CardWrapper } from 'src/shared/componetnts/card-wrapper/card-wrapper.component';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/modules/navigation/types';
import { Product } from 'src/services/product/product.types';

interface ProductCardProps {
	product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const goToProductInfo = () =>
		navigation.navigate(NAVIGATION_KEYS.PRODUCTS_INFO, {
			productId: product.id,
		});

	return (
		<Pressable
			onPress={goToProductInfo}
			style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
		>
			<CardWrapper>
				<View style={styles.namePriceBlock}>
					<View style={styles.textBlock}>
						<Text style={styles.plainText}>{product.name}</Text>
					</View>
					<View style={styles.textBlock}>
						<Text style={styles.strongText}>Price: </Text>
						<Text style={styles.plainText}>${product.price}</Text>
					</View>
				</View>
				<View style={styles.textBlock}>
					<Text style={styles.strongText}>Category:</Text>
					<Text style={styles.plainText}>{product.category}</Text>
				</View>
			</CardWrapper>
		</Pressable>
	);
};
