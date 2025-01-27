import { View, Text, Pressable } from 'react-native';
import {
	PaymentStatusOption,
	DeliveryStatusOption,
	SortOption,
} from '../../constants';
import { styles } from './filter-and-sort-menu.styles';

interface FilterAndSortMenuProps {
	paymentStatus: PaymentStatusOption;
	deliveryStatus: DeliveryStatusOption;
	sortOrder: SortOption;
	onPress: () => void;
}

export const FilterAndSortMenu = ({
	paymentStatus,
	deliveryStatus,
	sortOrder,
	onPress,
}: FilterAndSortMenuProps) => {
	return (
		<Pressable onPress={onPress} style={styles.container}>
			<View>
				<Text style={styles.strongText}>Filter by</Text>
			</View>

			<View style={styles.block}>
				<View style={styles.optionBlock}>
					<Text style={styles.strongText}>Payment:</Text>
					<Text style={styles.plainText}>{paymentStatus}</Text>
				</View>

				<View>
					<Text style={styles.strongText}>Delivery:</Text>
					<Text style={styles.plainText}>{deliveryStatus}</Text>
				</View>

				<View>
					<Text style={styles.strongText}>Date:</Text>
					<Text style={styles.plainText}>{sortOrder}</Text>
				</View>
			</View>
		</Pressable>
	);
};
