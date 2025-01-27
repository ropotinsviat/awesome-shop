import { View, Text } from 'react-native';
import { Order } from 'src/services/order/order.types';
import { CardWrapper } from 'src/shared/componetnts/card-wrapper';
import { styles } from './order-card.styles';
import { formatDate } from 'src/shared/utils/formaters/time.format';
import { capitalizeFirstLetter } from 'src/shared/utils/formaters/capitalize-first-letter.format';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/modules/navigation/types';
import { Pressable } from 'react-native-gesture-handler';

interface OrderCardProps {
	order: Order;
}

export const OrderCard = ({ order }: OrderCardProps) => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const roundedTotal = order.totalAmount.toFixed(2);
	const formatedTime = formatDate(String(order.createdAt));
	const paymentStatus = capitalizeFirstLetter(order.paymentStatus);
	const deliveryStatus = capitalizeFirstLetter(order.deliveryStatus);

	const goToOrderDetails = () =>
		navigation.navigate(NAVIGATION_KEYS.ORDER_DETAILS, {
			orderId: order.id,
		});

	return (
		<Pressable onPress={goToOrderDetails}>
			<CardWrapper>
				<View style={styles.textBlock}>
					<Text style={styles.text}>
						<Text style={styles.strong}>Date: </Text>
						{formatedTime}
					</Text>
				</View>

				<View style={styles.textBlock}>
					<Text style={styles.text}>
						<Text style={styles.strong}>ID: </Text> {order.id}
					</Text>
				</View>

				<View style={styles.textBlock}>
					<Text style={styles.text}>
						<Text style={styles.strong}>Payment Status: </Text>
						{paymentStatus}
					</Text>
				</View>

				<View style={styles.textBlock}>
					<Text style={styles.text}>
						<Text style={styles.strong}>Delivery Status: </Text>
						{deliveryStatus}
					</Text>
				</View>

				<View style={styles.textBlock}>
					<Text style={styles.text}>
						<Text style={styles.strong}>Total: </Text>$
						{roundedTotal}
					</Text>
				</View>
			</CardWrapper>
		</Pressable>
	);
};
