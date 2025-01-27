import { StyleSheet } from 'react-native';
import { FONTS } from 'src/shared/styles';

export const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: 116.25,
		marginTop: 70,
		marginBottom: 50,
	},
	image: {
		width: 43.22,
		height: 38.25,
	},
	text: {
		fontFamily: FONTS.KAUSHANSCRIPT,
		fontSize: 40,
	},
});
