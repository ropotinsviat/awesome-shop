import * as React from 'react';
import { Layout } from 'src/shared/componetnts/layouts/layout/layout.component';
import { Header } from 'src/shared/componetnts/header';
import { OrderCatalog } from '../../components/order-catalog';

export const OrdersMainScreen = () => {
	return (
		<Layout>
			<Header title="Orders" />

			<OrderCatalog />
		</Layout>
	);
};
