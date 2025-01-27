import * as React from 'react';
import { AuthLink } from '../../components/auth-link';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/modules/navigation/types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Layout } from 'src/shared/componetnts/layouts/layout';
import { H2 } from 'src/shared/componetnts/texts/h2';
import { RegisterForm } from '../../components/register-form';
import { KeyboardAwareLayout } from 'src/shared/componetnts/layouts/keyboard-aware-layout';

export const RegisterScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const goToLogin = () => navigation.navigate(NAVIGATION_KEYS.LOGIN);

	return (
		<Layout>
			<KeyboardAwareLayout>
				<H2 text="Sign Up" />

				<RegisterForm />

				<AuthLink
					text="Have you already registered?"
					linkText="Sign In"
					onPress={goToLogin}
				/>
			</KeyboardAwareLayout>
		</Layout>
	);
};
