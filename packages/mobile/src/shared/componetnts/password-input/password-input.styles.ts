import { StyleSheet } from 'react-native';
import { COLORS } from 'src/shared/styles';

export const styles = StyleSheet.create({
	container: {
		position: 'relative',
	},

	iconContainer: {
		position: 'absolute',
		right: 20,
		top: '50%',
		transform: [{ translateY: -14 }],
	},

	icon: {
		tintColor: COLORS.blue,
		color: COLORS.blue,
	},

	iconColor: {
		tintColor: COLORS.gray,
	},

	iconFocused: {
		tintColor: COLORS.blue,
	},
});
