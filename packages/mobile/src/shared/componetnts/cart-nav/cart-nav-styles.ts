import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/shared/styles';

export const styles = StyleSheet.create({
	container: {
		position: 'relative',
		gap: 20,
		alignSelf: 'center',
		marginVertical: 10,
	},
	circle: {
		width: 28,
		height: 28,
		bottom: -8,
		right: -8,
		justifyContent: 'center',
		alignContent: 'center',
		textAlign: 'center',
		borderRadius: '50%',
		position: 'absolute',
		backgroundColor: COLORS.red,
	},
	text: {
		textAlign: 'center',
		fontSize: 14,
		color: COLORS.white,
	},
});
