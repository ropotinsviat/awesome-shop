import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/shared/styles';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: 20,
		alignSelf: 'center',
		marginVertical: 10,
	},
	minus: {
		backgroundColor: COLORS.gray,
	},
	count: {
		backgroundColor: COLORS.white,
		width: 55,
		height: 60,
		justifyContent: 'center',
		alignContent: 'center',
		textAlign: 'center',
		borderColor: COLORS.gray,
		borderWidth: 1,
		borderRadius: 10,
	},
	countText: {
		justifyContent: 'center',
		alignContent: 'center',
		textAlign: 'center',
		fontSize: 20,
		fontFamily: FONTS.POPPINS.BOLD,
	},
	plus: {
		backgroundColor: COLORS.blue,
	},
	circle: {
		width: 60,
		height: 60,
		justifyContent: 'center',
		alignContent: 'center',
		textAlign: 'center',
		borderRadius: '50%',
	},
	text: {
		textAlign: 'center',
		fontSize: 30,
		color: COLORS.white,
	},
});
