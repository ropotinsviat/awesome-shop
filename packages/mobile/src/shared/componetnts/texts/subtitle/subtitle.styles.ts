import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/shared/styles';

export const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
	},
	text: {
		fontSize: 16,
		textAlign: 'center',
		color: COLORS.gray,
		fontFamily: FONTS.POPPINS.REGULAR,
	},
});
