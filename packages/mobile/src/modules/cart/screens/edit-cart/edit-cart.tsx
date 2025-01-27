import * as React from 'react';
import { Layout } from 'src/shared/componetnts/layouts/layout/layout.component';
import { Header } from 'src/shared/componetnts/header';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/modules/navigation/types';
import { CartNav } from 'src/shared/componetnts/cart-nav';
import { EditCart } from '../../components/edit-cart';

type ProductInfoRouteProp = RouteProp<
	RootStackParamList,
	NAVIGATION_KEYS.PRODUCTS_INFO
>;

export const EditCartScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const goToCart = () => navigation.navigate(NAVIGATION_KEYS.CART);

	const route = useRoute<ProductInfoRouteProp>();
	const { productId } = route.params;

	return (
		<Layout>
			<Header title="Edit Cart Item" onBackPress={goToCart}>
				<CartNav />
			</Header>

			<EditCart productId={productId} />
		</Layout>
	);
};
