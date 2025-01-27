import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/shared/styles';

export const styles = StyleSheet.create({
	container: {
		marginHorizontal: 20,
		marginBottom: 10,
	},
	block: {
		marginTop: 15,
		flexDirection: 'row',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'stretch',
	},
	optionBlock: {
		flexDirection: 'column',
	},
	strongText: {
		fontFamily: FONTS.POPPINS.BOLD,
		fontSize: 16,
		marginRight: 4,
	},
	plainText: {
		fontFamily: FONTS.POPPINS.REGULAR,
		fontSize: 16,
		color: COLORS.green,
	},
});
