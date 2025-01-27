import * as React from 'react';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/modules/navigation/types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Layout } from 'src/shared/componetnts/layouts/layout';
import { KeyboardAwareLayout } from 'src/shared/componetnts/layouts/keyboard-aware-layout';
import { EditPasswordForm } from '../../components/edit-password-form';
import { Header } from 'src/shared/componetnts/header';

export const EditPasswordScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const goToSettings = () =>
		navigation.navigate(NAVIGATION_KEYS.BOTTOMTABS, {
			screen: NAVIGATION_KEYS.SETTINGS,
		});

	return (
		<Layout>
			<KeyboardAwareLayout>
				<Header title="Change Password" onBackPress={goToSettings} />

				<EditPasswordForm />
			</KeyboardAwareLayout>
		</Layout>
	);
};
