import * as React from 'react';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/modules/navigation/types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Layout } from 'src/shared/componetnts/layouts/layout';
import { KeyboardAwareLayout } from 'src/shared/componetnts/layouts/keyboard-aware-layout';
import { Header } from 'src/shared/componetnts/header';
import { EditUserForm } from '../../components/edit-user-form';

export const EditUserScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const goToSettings = () =>
		navigation.navigate(NAVIGATION_KEYS.BOTTOMTABS, {
			screen: NAVIGATION_KEYS.SETTINGS,
		});

	return (
		<Layout>
			<KeyboardAwareLayout>
				<Header title="Personal Info" onBackPress={goToSettings} />

				<EditUserForm />
			</KeyboardAwareLayout>
		</Layout>
	);
};
