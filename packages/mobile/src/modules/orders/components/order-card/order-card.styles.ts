import { StyleSheet } from 'react-native';
import { FONTS } from 'src/shared/styles';

export const styles = StyleSheet.create({
	textBlock: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		marginVertical: 5,
	},
	text: {
		fontFamily: FONTS.POPPINS.REGULAR,
		fontSize: 16,
		marginRight: 4,
	},
	strong: {
		fontFamily: FONTS.POPPINS.BOLD,
	},
});
