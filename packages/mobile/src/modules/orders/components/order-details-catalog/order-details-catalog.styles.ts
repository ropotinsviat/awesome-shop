import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/shared/styles';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingBottom: 100,
	},
	totalAmount: {
		textAlign: 'center',
		fontFamily: FONTS.POPPINS.BOLD,
		fontSize: 18,
	},
	top: {
		marginTop: 10,
		marginBottom: 18,
	},
	list: {
		paddingHorizontal: 16,
		flex: 1,
	},
	button: {
		margin: 16,
	},
	loader: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
