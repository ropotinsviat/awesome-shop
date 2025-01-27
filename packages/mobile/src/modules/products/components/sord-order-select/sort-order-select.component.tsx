import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './sort-order-select.styles';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from 'src/shared/styles';
import { SortOrder } from 'src/services/product/product.types';

interface SortOrderSelectProps {
	selectedSort: SortOrder;
	setSelectedSort: (sortOrder: SortOrder) => void;
}

const sortOptions: {
	label: string;
	icon: 'arrowup' | 'arrowdown' | 'close';
	value: SortOrder;
}[] = [
	{ label: 'asc', icon: 'arrowup', value: 'asc' },
	{ label: 'desc', icon: 'arrowdown', value: 'desc' },
	{ label: 'reset', icon: 'close', value: null },
];

export const SortOrderSelect: React.FC<SortOrderSelectProps> = ({
	selectedSort,
	setSelectedSort,
}) => {
	return (
		<View style={styles.container}>
			{sortOptions.map((option) => (
				<TouchableOpacity
					key={option.value ?? 'reset'}
					style={styles.iconButton}
					onPress={() => setSelectedSort(option.value)}
				>
					<AntDesign
						name={option.icon}
						size={34}
						color={
							selectedSort === option.value
								? COLORS.blue
								: COLORS.darkerGray
						}
					/>
				</TouchableOpacity>
			))}
		</View>
	);
};
