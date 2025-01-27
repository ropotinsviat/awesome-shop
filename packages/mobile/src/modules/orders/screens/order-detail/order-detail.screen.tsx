import { Layout } from 'src/shared/componetnts/layouts/layout/layout.component';
import { Header } from 'src/shared/componetnts/header';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/modules/navigation/types';
import { useOrderDetail } from '../../hooks/useOrderDetail';
import { EditOrderDetail } from '../../components/edit-order-detail';

type EditOrderDetailRouteProp = RouteProp<
	RootStackParamList,
	NAVIGATION_KEYS.EDIT_ORDER_DETAIL
>;

export const OrderDetailScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const route = useRoute<EditOrderDetailRouteProp>();
	const { orderId, orderDetailId, canEdit } = route.params;

	const navigateToOrderDetails = () =>
		navigation.navigate(NAVIGATION_KEYS.ORDER_DETAILS, { orderId });

	return (
		<Layout>
			<Header
				title="Edit order detail"
				onBackPress={navigateToOrderDetails}
			/>

			<EditOrderDetail
				orderId={orderId}
				orderDetailId={orderDetailId}
				canEdit={canEdit}
			/>
		</Layout>
	);
};
