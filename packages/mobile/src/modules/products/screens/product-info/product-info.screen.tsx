import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { Layout } from 'src/shared/componetnts/layouts/layout/layout.component';
import { Header } from 'src/shared/componetnts/header';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/modules/navigation/types';
import { useProduct } from '../../hooks/useProduct';
import { ProductToCart } from '../../components/product-to-cart';
import { CartNav } from 'src/shared/componetnts/cart-nav';

type ProductInfoRouteProp = RouteProp<
	RootStackParamList,
	NAVIGATION_KEYS.PRODUCTS_INFO
>;

export const ProductsInfoScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const goToProducts = () => navigation.navigate(NAVIGATION_KEYS.BOTTOMTABS);

	const route = useRoute<ProductInfoRouteProp>();
	const { productId } = route.params;

	const { product, loadingProduct } = useProduct(productId);

	return (
		<Layout>
			<Header title="Product information" onBackPress={goToProducts}>
				<CartNav />
			</Header>

			{!loadingProduct && product ? (
				<ProductToCart product={product} />
			) : (
				<ActivityIndicator />
			)}
		</Layout>
	);
};
