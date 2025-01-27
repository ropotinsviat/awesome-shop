import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './counter.styles';

interface CounterProps {
	count: number;
	onIncrement: () => void;
	onDecrement: () => void;
}

export const Counter = ({ count, onIncrement, onDecrement }: CounterProps) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={[styles.circle, styles.minus]}
				onPress={onDecrement}
			>
				<Text style={styles.text}>-</Text>
			</TouchableOpacity>

			<View style={styles.count}>
				<Text style={styles.countText}>{count}</Text>
			</View>

			<TouchableOpacity
				style={[styles.circle, styles.plus]}
				onPress={onIncrement}
			>
				<Text style={styles.text}>+</Text>
			</TouchableOpacity>
		</View>
	);
};
