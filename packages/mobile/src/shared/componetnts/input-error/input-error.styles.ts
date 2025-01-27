import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/shared/styles';

export const styles = StyleSheet.create({
	error: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		fontFamily: FONTS.POPPINS.MEDIUM,
		fontSize: 14,
		color: COLORS.red,
	},
});
