import * as React from 'react';
import { Logo } from 'src/shared/componetnts/logo';
import { Layout } from 'src/shared/componetnts/layouts/layout';
import { LoginForm } from '../../components/login-form';
import { AuthLink } from '../../components/auth-link';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/modules/navigation/types';
import { KeyboardAwareLayout } from 'src/shared/componetnts/layouts/keyboard-aware-layout';
import { IndentLayout } from 'src/shared/componetnts/layouts/indent-layout';

export const LoginScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const goToRegister = () => navigation.navigate(NAVIGATION_KEYS.REGISTER);

	return (
		<Layout>
			<KeyboardAwareLayout>
				<Logo />

				<LoginForm />

				<AuthLink
					text="Don't have an account?"
					linkText="Sign Up"
					onPress={goToRegister}
				/>
			</KeyboardAwareLayout>
		</Layout>
	);
};
