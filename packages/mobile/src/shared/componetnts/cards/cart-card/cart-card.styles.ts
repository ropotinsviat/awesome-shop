import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/shared/styles';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: 20,
	},
	totalAmountBlock: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: 8,
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
