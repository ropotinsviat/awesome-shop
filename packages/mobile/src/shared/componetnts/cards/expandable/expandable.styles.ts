import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/shared/styles';

export const styles = StyleSheet.create({
	container: {
		borderRadius: 8,
		overflow: 'hidden',
	},
	cardHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 16,
		backgroundColor: COLORS.darkerWhite,
	},
	title: {
		fontFamily: FONTS.POPPINS.MEDIUM,
		fontSize: 16,
		maxWidth: 200,
	},
	arrow: {
		marginLeft: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	cardBody: {
		overflow: 'hidden',
		backgroundColor: COLORS.darkerWhite,
	},
	text: {
		fontSize: 16,
		fontFamily: FONTS.POPPINS.REGULAR,
		padding: 16,
		paddingTop: 5,
		lineHeight: 26,
	},
	hiddenContent: {
		position: 'absolute',
		left: 0,
		right: 0,
	},
});
