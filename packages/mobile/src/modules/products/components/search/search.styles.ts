import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/shared/styles';

export const styles = StyleSheet.create({
	container: {
		position: 'relative',
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
	focused: {
		borderWidth: 1.5,
		borderColor: COLORS.blue,
	},
});
