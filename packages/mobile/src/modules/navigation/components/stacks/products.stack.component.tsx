import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterSuccessScreen } from 'src/modules/auth/screens/register-success';
import { SCREEN_OPTIONS } from '../../constants';

const ProductsStack = createNativeStackNavigator();

export const ProductsStackScreens = () => {
	return (
		<ProductsStack.Navigator>
			<ProductsStack.Screen
				name="PRODUCTS"
				component={RegisterSuccessScreen}
				options={SCREEN_OPTIONS}
			/>
		</ProductsStack.Navigator>
	);
};
