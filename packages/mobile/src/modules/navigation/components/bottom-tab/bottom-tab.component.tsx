import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NAVIGATION_KEYS } from '../../types';
import ProductsIcon from 'assets/svg/products';
import { ProductsMainScreen } from 'src/modules/products/screens/products-main';
import { COLORS } from 'src/shared/styles';
import OrdersIcon from 'assets/svg/orders';
import SettingsIcon from 'assets/svg/settings';
import { styles } from './bottom-tab.styles';
import { OrdersMainScreen } from 'src/modules/orders/screens/orders-main';
import { SettingsMainScreen } from 'src/modules/settings/screens/settings-main';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: styles.tabBarStyle,
				tabBarLabelStyle: styles.tabBarLabelStyle,
				tabBarIconStyle: styles.tabBarIconStyle,
			}}
		>
			<Tab.Screen
				name={NAVIGATION_KEYS.PRODUCTS}
				component={ProductsMainScreen}
				options={{
					tabBarLabel: 'Products',
					tabBarIcon: ({ focused, color, size }) => (
						<ProductsIcon
							width={size}
							height={size}
							fill={focused ? COLORS.blue : COLORS.darkerGray}
						/>
					),
					headerShown: false,
				}}
			/>

			<Tab.Screen
				name={NAVIGATION_KEYS.ORDERS}
				component={OrdersMainScreen}
				options={{
					tabBarLabel: 'Orders',
					tabBarIcon: ({ focused, color, size }) => (
						<OrdersIcon
							width={size}
							height={size}
							fill={focused ? COLORS.blue : COLORS.darkerGray}
						/>
					),
					headerShown: false,
				}}
			/>

			<Tab.Screen
				name={NAVIGATION_KEYS.SETTINGS}
				component={SettingsMainScreen}
				options={{
					tabBarLabel: 'Settings',
					tabBarIcon: ({ focused, color, size }) => (
						<SettingsIcon
							width={size}
							height={size}
							stroke={focused ? COLORS.blue : COLORS.darkerGray}
						/>
					),
					headerShown: false,
				}}
			/>
		</Tab.Navigator>
	);
};
