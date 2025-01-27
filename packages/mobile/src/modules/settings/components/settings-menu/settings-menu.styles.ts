import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/shared/styles';

export const styles = StyleSheet.create({
	container: {
		marginHorizontal: 20,
		flexDirection: 'column',
		gap: 10,
	},
	plainText: {
		fontFamily: FONTS.POPPINS.MEDIUM,
		fontSize: 16,
	},
	redText: {
		fontFamily: FONTS.POPPINS.MEDIUM,
		fontSize: 16,
		color: COLORS.red,
	},
});
