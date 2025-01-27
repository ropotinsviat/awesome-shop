import {
	ActivityIndicator,
	FlatList,
	RefreshControl,
	View,
	StyleSheet,
} from 'react-native';
import { useOrdersList } from '../../hooks/useOrdersList';
import { styles } from './order-catalog.styles';
import { Subtitle } from 'src/shared/componetnts/texts/subtitle';
import { OrderCard } from '../order-card';
import React from 'react';
import { useBottomSheet } from 'src/shared/context/bottom-sheet';
import { BottomSheetFilterAndSort } from '../bottom-sheet-filter-and-sort';
import { useOrderFilterAndSort } from '../../hooks/useOrderFilterAndSort';
import { FilterAndSortMenu } from '../filter-and-sort-menu';

export const OrderCatalog = () => {
	const {
		paymentStatus,
		setPaymentStatus,
		deliveryStatus,
		setDeliveryStatus,
		sortOrder,
		setSortOrder,
	} = useOrderFilterAndSort();

	const {
		orders,
		loadingOrders,
		loadingNextPage,
		handleNextPage,
		handleFetchOrders,
	} = useOrdersList(paymentStatus, deliveryStatus, sortOrder);

	const { openBottomSheet } = useBottomSheet();

	return (
		<>
			<FilterAndSortMenu
				paymentStatus={paymentStatus}
				deliveryStatus={deliveryStatus}
				sortOrder={sortOrder}
				onPress={openBottomSheet}
			/>

			<FlatList
				style={styles.list}
				data={orders}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <OrderCard order={item} />}
				refreshControl={
					<RefreshControl
						refreshing={loadingOrders}
						onRefresh={handleFetchOrders}
					/>
				}
				onEndReached={handleNextPage}
				onEndReachedThreshold={0.5}
				ListFooterComponent={
					loadingNextPage ? <ActivityIndicator size="small" /> : null
				}
				ListEmptyComponent={
					!loadingOrders ? <Subtitle text="No orders yet." /> : null
				}
			/>

			<BottomSheetFilterAndSort
				paymentStatus={paymentStatus}
				setPaymentStatus={setPaymentStatus}
				deliveryStatus={deliveryStatus}
				setDeliveryStatus={setDeliveryStatus}
				sortOrder={sortOrder}
				setSortOrder={setSortOrder}
			/>
		</>
	);
};
