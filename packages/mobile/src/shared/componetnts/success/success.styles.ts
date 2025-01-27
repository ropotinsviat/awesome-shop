import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/shared/styles';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		paddingBottom: 20,
	},
	content: {
		alignItems: 'center',
		justifyContent: 'center',
		flexGrow: 1,
	},
	textWrapper: {
		marginTop: 25,
	},
	text: {
		fontFamily: FONTS.POPPINS.MEDIUM,
		fontSize: 16,
	},
	svg: {
		color: COLORS.green,
	},
	button: {
		marginHorizontal: 16,
	},
});
