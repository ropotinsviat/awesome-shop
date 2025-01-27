import {
	NavigationProp,
	RouteProp,
	useNavigation,
	useRoute,
} from '@react-navigation/native';
import CheckmarkCircle from 'assets/svg/checkmark-circle';
import * as React from 'react';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/modules/navigation/types';
import { Layout } from 'src/shared/componetnts/layouts/layout';
import { Success } from 'src/shared/componetnts/success';
import { COLORS } from 'src/shared/styles';

type PaymentSuccessRouteProp = RouteProp<
	RootStackParamList,
	NAVIGATION_KEYS.PAYMENT_SUCCESS
>;

export const PaymentSuccessScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	const route = useRoute<PaymentSuccessRouteProp>();
	const { orderId } = route.params;

	const goToOrders = () =>
		navigation.navigate(NAVIGATION_KEYS.ORDER_DETAILS, { orderId });

	return (
		<Layout>
			<Success
				text="Payment successful!"
				buttonTitle="Ok"
				onPress={goToOrders}
				buttonChildren={
					<CheckmarkCircle
						height={22}
						width={22}
						fill={COLORS.white}
					/>
				}
			/>
		</Layout>
	);
};
