import Toast from 'react-native-toast-message';
import { styles } from './toast.styles';

const showToast = (
	type: 'success' | 'error' | 'info',
	text1: string,
	visibilityTime: number = 4000,
	position: 'top' | 'bottom' = 'top',
) => {
	Toast.show({
		type,
		text1,
		visibilityTime,
		position,
		text1Style: styles.text1Style,
		text2Style: styles.text2Style,
		topOffset: 75,
	});
};

export const toast = {
	success: (
		text1: string,
		visibilityTime: number = 4000,
		position: 'top' | 'bottom' = 'top',
	) => {
		showToast('success', text1, visibilityTime, position);
	},
	error: (
		text1: string,
		visibilityTime: number = 4000,
		position: 'top' | 'bottom' = 'top',
	) => {
		showToast('error', text1, visibilityTime, position);
	},
	info: (
		text1: string,
		visibilityTime: number = 4000,
		position: 'top' | 'bottom' = 'top',
	) => {
		showToast('info', text1, visibilityTime, position);
	},
};
