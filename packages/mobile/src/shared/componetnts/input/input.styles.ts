import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/shared/styles';

export const styles = StyleSheet.create({
	container: {
		position: 'relative',
		paddingBottom: 20,
		marginBottom: 10,
	},
	input: {
		width: '100%',
		paddingHorizontal: 20,
		paddingVertical: 12,
		fontSize: 16,
		borderWidth: 1.5,
		borderRadius: 10,
		fontFamily: FONTS.POPPINS.MEDIUM,
		backgroundColor: COLORS.white,
		borderColor: COLORS.lightGray,
	},
	label: {
		fontFamily: FONTS.POPPINS.MEDIUM,
		marginBottom: 6,
		fontSize: 14,
		color: COLORS.darkerGray,
	},
	focused: {
		borderWidth: 1.5,
		borderColor: COLORS.blue,
	},
	wrong: {
		borderWidth: 1.5,
		borderColor: COLORS.red,
		marginBottom: 10,
	},
	correct: {
		borderWidth: 1.5,
	},
	noEditable: {
		backgroundColor: COLORS.darkerWhite,
		borderColor: COLORS.lightGray,
		color: COLORS.gray,
	},
});
