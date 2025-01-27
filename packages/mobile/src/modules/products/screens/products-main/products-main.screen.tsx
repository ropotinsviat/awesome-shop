import * as React from 'react';
import { Layout } from 'src/shared/componetnts/layouts/layout/layout.component';
import { Header } from 'src/shared/componetnts/header';
import { ProductCatalog } from '../../components/product-catalog';
import { CartNav } from 'src/shared/componetnts/cart-nav';

export const ProductsMainScreen = () => {
	return (
		<Layout>
			<Header title="Products">
				<CartNav />
			</Header>

			<ProductCatalog />
		</Layout>
	);
};
