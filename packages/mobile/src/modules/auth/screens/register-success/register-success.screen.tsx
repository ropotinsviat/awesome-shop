import { NavigationProp, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/modules/navigation/types';
import { Layout } from 'src/shared/componetnts/layouts/layout';
import { Success } from 'src/shared/componetnts/success';

export const RegisterSuccessScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const goToLogin = () => navigation.navigate(NAVIGATION_KEYS.LOGIN);

	return (
		<Layout>
			<Success
				text="Account successfully registered!"
				buttonTitle="Sign In"
				onPress={goToLogin}
			/>
		</Layout>
	);
};
