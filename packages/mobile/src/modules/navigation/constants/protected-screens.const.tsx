import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_OPTIONS } from '.';
import { NAVIGATION_KEYS, RootStackParamList } from '../types/navigation.type';
import { BottomTab } from '../components/bottom-tab/bottom-tab.component';
import { ProductsInfoScreen } from 'src/modules/products/screens/product-info';
import { CartScreen } from 'src/modules/cart/screens/cart';
import { EditCartScreen } from 'src/modules/cart/screens/edit-cart';
import { OrderDetailsScreen } from 'src/modules/orders/screens/order-details';
import { FaqScreen } from 'src/modules/settings/screens/faq';
import { OrderDetailScreen } from 'src/modules/orders/screens/order-detail';
import { EditPasswordScreen } from 'src/modules/settings/screens/edit-password';
import { EditUserScreen } from 'src/modules/settings/screens/edit-user';
import { PaymentSuccessScreen } from 'src/modules/orders/screens/payment-success';

const ProtectedStack = createNativeStackNavigator<RootStackParamList>();

export const PROTECTED_SCREENS = (
	<>
		<ProtectedStack.Screen
			name={NAVIGATION_KEYS.BOTTOMTABS}
			component={BottomTab}
			options={SCREEN_OPTIONS}
		/>

		<ProtectedStack.Screen
			name={NAVIGATION_KEYS.PRODUCTS_INFO}
			component={ProductsInfoScreen}
			options={SCREEN_OPTIONS}
		/>

		<ProtectedStack.Screen
			name={NAVIGATION_KEYS.CART}
			component={CartScreen}
			options={SCREEN_OPTIONS}
		/>

		<ProtectedStack.Screen
			name={NAVIGATION_KEYS.EDIT_CART}
			component={EditCartScreen}
			options={SCREEN_OPTIONS}
		/>

		<ProtectedStack.Screen
			name={NAVIGATION_KEYS.ORDER_DETAILS}
			component={OrderDetailsScreen}
			options={SCREEN_OPTIONS}
		/>

		<ProtectedStack.Screen
			name={NAVIGATION_KEYS.FAQ}
			component={FaqScreen}
			options={SCREEN_OPTIONS}
		/>

		<ProtectedStack.Screen
			name={NAVIGATION_KEYS.EDIT_ORDER_DETAIL}
			component={OrderDetailScreen}
			options={SCREEN_OPTIONS}
		/>

		<ProtectedStack.Screen
			name={NAVIGATION_KEYS.EDIT_PASSWORD}
			component={EditPasswordScreen}
			options={SCREEN_OPTIONS}
		/>

		<ProtectedStack.Screen
			name={NAVIGATION_KEYS.EDIT_USER}
			component={EditUserScreen}
			options={SCREEN_OPTIONS}
		/>

		<ProtectedStack.Screen
			name={NAVIGATION_KEYS.PAYMENT_SUCCESS}
			component={PaymentSuccessScreen}
			options={SCREEN_OPTIONS}
		/>
	</>
);
