import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/shared/styles';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 20,
	},
	text: {
		fontSize: 16,
		fontFamily: FONTS.POPPINS.REGULAR,
	},
	link: {
		fontSize: 16,
		color: COLORS.blue,
		fontFamily: FONTS.POPPINS.BOLD,
	},
});
