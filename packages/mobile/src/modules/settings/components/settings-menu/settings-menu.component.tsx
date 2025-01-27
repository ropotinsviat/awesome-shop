import { View, Text, Pressable } from 'react-native';
import { useAuthStore } from 'src/store/auth.store';
import { styles } from './settings-menu.styles';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/modules/navigation/types';

export const SettingsMenu = () => {
	const setIsAuth = useAuthStore((state) => state.setIsAuth);
	const setTokens = useAuthStore((state) => state.setTokens);

	const logout = () => {
		setIsAuth(false);
		setTokens({ accessToken: null, refreshToken: null });
	};

	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	const goToFaq = () => navigation.navigate(NAVIGATION_KEYS.FAQ);
	const goToEditPassword = () =>
		navigation.navigate(NAVIGATION_KEYS.EDIT_PASSWORD);
	const goToEditUser = () => navigation.navigate(NAVIGATION_KEYS.EDIT_USER);

	return (
		<View style={styles.container}>
			<Pressable onPress={goToEditUser}>
				<Text style={styles.plainText}>Personal info</Text>
			</Pressable>
			<Pressable onPress={goToEditPassword}>
				<Text style={styles.plainText}>Change password</Text>
			</Pressable>
			<Pressable onPress={goToFaq}>
				<Text style={styles.plainText}>FAQ</Text>
			</Pressable>
			<Pressable>
				<Text style={styles.plainText}>Terms & Conditions</Text>
			</Pressable>
			<Pressable onPress={logout}>
				<Text style={styles.redText}>Logout</Text>
			</Pressable>
		</View>
	);
};
