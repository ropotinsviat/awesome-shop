import { useBottomSheet } from 'src/shared/context/bottom-sheet';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { OrderSearchOptions } from '../order-search-options';
import {
	deliveryFilterOptions,
	DeliveryStatusOption,
	paymentFilterOptions,
	PaymentStatusOption,
	SortOption,
	sortOptions,
} from '../../constants';

interface BottomSheetFilterAndSortProps {
	paymentStatus: PaymentStatusOption;
	setPaymentStatus: React.Dispatch<React.SetStateAction<PaymentStatusOption>>;
	deliveryStatus: DeliveryStatusOption;
	setDeliveryStatus: React.Dispatch<
		React.SetStateAction<DeliveryStatusOption>
	>;
	sortOrder: SortOption;
	setSortOrder: React.Dispatch<React.SetStateAction<SortOption>>;
}

export const BottomSheetFilterAndSort = ({
	paymentStatus,
	setPaymentStatus,
	deliveryStatus,
	setDeliveryStatus,
	sortOrder,
	setSortOrder,
}: BottomSheetFilterAndSortProps) => {
	const { bottomSheetRef, openBottomSheet, snapPoints } = useBottomSheet();

	return (
		<BottomSheet
			ref={bottomSheetRef}
			index={-1}
			snapPoints={snapPoints}
			enablePanDownToClose={true}
		>
			<BottomSheetView>
				<OrderSearchOptions
					title="Payment status"
					selected={paymentStatus}
					options={paymentFilterOptions}
					onOptionPress={(option) => setPaymentStatus(option)}
				/>

				<OrderSearchOptions
					title="Delivery status"
					selected={deliveryStatus}
					options={deliveryFilterOptions}
					onOptionPress={(option) => setDeliveryStatus(option)}
				/>

				<OrderSearchOptions
					title="Date sorting"
					selected={sortOrder}
					options={sortOptions}
					onOptionPress={(option) => setSortOrder(option)}
				/>
			</BottomSheetView>
		</BottomSheet>
	);
};
