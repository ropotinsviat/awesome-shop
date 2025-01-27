import { ActivityIndicator, StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/shared/styles';

export const styles = StyleSheet.create({
	button: {
		backgroundColor: COLORS.blue,
		padding: 15,
		borderRadius: 8,
		alignItems: 'center',
		paddingVertical: 12,
		paddingHorizontal: 20,
	},
	text: {
		color: COLORS.white,
		fontSize: 16,
		fontFamily: FONTS.POPPINS.BOLD,
	},
	disabledButton: {
		backgroundColor: COLORS.gray,
	},
	disabledText: {
		color: COLORS.white,
	},
	activityIndicator: {
		transform: [{ scale: 1.5 }],
		paddingVertical: 4,
		color: COLORS.white,
	},
	content: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 10,
	},
});
