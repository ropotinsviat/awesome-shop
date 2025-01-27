import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 85,
		position: 'relative',
		paddingHorizontal: 20,
		paddingBottom: 10,
	},
	backButton: {
		position: 'absolute',
		left: 20,
		top: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleContainer: {
		position: 'absolute',
		left: 0,
		right: 0,
		alignItems: 'center',
	},
	right: {
		position: 'absolute',
		right: 20,
		top: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
