import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterSuccessScreen } from 'src/modules/auth/screens/register-success';
import { SCREEN_OPTIONS } from '../../constants';

const ProductsStack = createNativeStackNavigator();

export const OrdersStackScreens = () => {
	return (
		<ProductsStack.Navigator>
			<ProductsStack.Screen
				name="ORDERS"
				component={RegisterSuccessScreen}
				options={SCREEN_OPTIONS}
			/>
		</ProductsStack.Navigator>
	);
};
