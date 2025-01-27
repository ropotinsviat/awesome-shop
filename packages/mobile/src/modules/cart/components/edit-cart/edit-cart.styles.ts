import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/shared/styles';

export const styles = StyleSheet.create({
	removeFromCart: {
		textAlign: 'center',
		color: COLORS.red,
		fontFamily: FONTS.POPPINS.BOLD,
		fontSize: 16,
		marginVertical: 15,
	},
	namePriceBlock: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	textBlock: {
		marginVertical: 4,
	},
	strongText: {
		fontFamily: FONTS.POPPINS.BOLD,
		fontSize: 16,
		marginRight: 4,
	},
	plainText: {
		fontFamily: FONTS.POPPINS.REGULAR,
		fontSize: 16,
	},
	button: { marginBottom: 20 },
});
