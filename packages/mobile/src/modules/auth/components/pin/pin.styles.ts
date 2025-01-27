import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/shared/styles';

export const styles = StyleSheet.create({
	button: {
		marginBottom: 20,
	},
	body: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginVertical: 20,
	},
	input: {
		width: 55,
		height: 65,
		borderWidth: 1,
		backgroundColor: COLORS.white,
		borderColor: COLORS.lightGray,
		borderRadius: 8,
		fontSize: 20,
		alignItems: 'center',
		textAlign: 'center',
		marginHorizontal: 8,
		fontFamily: FONTS.POPPINS.MEDIUM,
	},

	cell: {
		width: 50,
		paddingVertical: 10,
		marginHorizontal: 5,
		fontSize: 24,
		borderWidth: 1,
		borderRadius: 12,
		borderColor: COLORS.lightGray,
		backgroundColor: COLORS.white,
		textAlign: 'center',
		fontFamily: FONTS.POPPINS.REGULAR,
	},
	focusCell: {
		borderColor: COLORS.darkerGray,
	},
});
