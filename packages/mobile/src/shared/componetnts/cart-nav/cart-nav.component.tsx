import CartIcon from 'assets/svg/cart';
import { Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from 'src/shared/styles';
import { styles } from './cart-nav-styles';
import { useCartStore } from 'src/store/cart.store';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/modules/navigation/types';

export const CartNav = () => {
	const cart = useCartStore((state) => state.cart);

	const count = cart.length;

	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const goToCart = () => navigation.navigate(NAVIGATION_KEYS.CART);

	return (
		<TouchableOpacity onPress={goToCart}>
			<CartIcon width={36} height={36} stroke={COLORS.darkBlue} />
			{count > 0 && (
				<View style={styles.circle}>
					<Text style={styles.text}>{count}</Text>
				</View>
			)}
		</TouchableOpacity>
	);
};
