import * as React from 'react';
import { Layout } from 'src/shared/componetnts/layouts/layout/layout.component';
import { Header } from 'src/shared/componetnts/header';
import { CartNav } from 'src/shared/componetnts/cart-nav';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/modules/navigation/types';
import { CartCatalog } from '../../components/cart-catalog';

export const CartScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const goToProducts = () => navigation.navigate(NAVIGATION_KEYS.BOTTOMTABS);

	return (
		<Layout>
			<Header title="Cart" onBackPress={goToProducts}>
				<CartNav />
			</Header>

			<CartCatalog />
		</Layout>
	);
};
