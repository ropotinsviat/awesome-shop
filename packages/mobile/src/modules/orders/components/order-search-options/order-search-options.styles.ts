import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/shared/styles';

export const styles = StyleSheet.create({
	title: {
		fontFamily: FONTS.POPPINS.BOLD,
		fontSize: 18,
		marginVertical: 15,
		textAlign: 'center',
	},
	options: {
		marginLeft: 30,
	},
	option: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 8,
		gap: 20,
		// backgroundColor: 'red',
	},
	optionText: {
		fontFamily: FONTS.POPPINS.REGULAR,
		fontSize: 16,
		// backgroundColor: 'blue',
	},
	selected: {
		color: COLORS.green,
	},
});
