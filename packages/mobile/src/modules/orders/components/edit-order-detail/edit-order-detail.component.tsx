import React from 'react';
import { useOrderDetail } from '../../hooks/useOrderDetail';
import { View, Pressable, Text, ActivityIndicator } from 'react-native';
import { Counter } from 'src/shared/componetnts/counter';
import { IndentLayout } from 'src/shared/componetnts/layouts/indent-layout';
import { ProductInfo } from 'src/shared/componetnts/product-info';
import { styles } from './edit-order-detail.styles';
import { Button } from 'src/shared/componetnts/button';

interface EditOrderDetailProps {
	orderId: string;
	orderDetailId: string;
	canEdit: boolean;
}

export const EditOrderDetail = ({
	orderId,
	orderDetailId,
	canEdit,
}: EditOrderDetailProps) => {
	const {
		orderDetail,
		loadingOrderDetail,
		save,
		remove,
		decrement,
		increment,
		selectedCount,
	} = useOrderDetail(orderId, orderDetailId);

	return loadingOrderDetail ? (
		<View style={styles.loader}>
			<ActivityIndicator size={'large'} />
		</View>
	) : (
		<IndentLayout>
			<View>
				{orderDetail && <ProductInfo product={orderDetail.product} />}
				{canEdit ? (
					<>
						<Counter
							count={selectedCount}
							onIncrement={increment}
							onDecrement={decrement}
						/>
						<Pressable onPress={remove}>
							<Text style={styles.removeFromCart}>
								Remove from the cart
							</Text>
						</Pressable>
					</>
				) : (
					<Text style={styles.plainText}>{selectedCount}</Text>
				)}
			</View>

			{canEdit && (
				<Button
					title="Save"
					onPress={save}
					extraButtonStyles={styles.button}
				/>
			)}
		</IndentLayout>
	);
};
