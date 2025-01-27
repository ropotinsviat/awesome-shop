import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/shared/styles';

export const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		borderWidth: 1,
		borderColor: COLORS.darkerGray,
		borderRadius: 10,
		padding: 8,
	},
	namePriceBlock: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	textBlock: {
		flexDirection: 'row',
		alignItems: 'center',
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
});
