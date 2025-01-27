import { View, Text, Pressable } from 'react-native';
import { styles } from './order-search-options.styles';
import CheckmarkCircle from 'assets/svg/checkmark-circle';

interface OrderSearchOptionsProps {
	title: string;
	options: string[];
	selected: string;
	onOptionPress: (option: string) => void;
}

export const OrderSearchOptions = ({
	title,
	options,
	selected,
	onOptionPress,
}: OrderSearchOptionsProps) => {
	return (
		<View>
			<Text style={styles.title}>{title}</Text>
			<View style={styles.options}>
				{options.map((option) => (
					<Pressable
						onPress={() => onOptionPress(option)}
						key={option}
					>
						<View style={styles.option}>
							<Text
								style={[
									styles.optionText,
									option === selected && styles.selected,
								]}
							>
								{option}
							</Text>
							{option === selected && (
								<CheckmarkCircle width={25} height={25} />
							)}
						</View>
					</Pressable>
				))}
			</View>
		</View>
	);
};
