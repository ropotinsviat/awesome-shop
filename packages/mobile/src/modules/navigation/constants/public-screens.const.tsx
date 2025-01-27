import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_OPTIONS } from '../constants';
import { LoginScreen } from '../../auth/screens/login';
import { RegisterScreen } from 'src/modules/auth/screens/register';
import { PinVerifyScreen } from 'src/modules/auth/screens/pin';
import { RegisterSuccessScreen } from 'src/modules/auth/screens/register-success/register-success.screen';
import { NAVIGATION_KEYS, RootStackParamList } from '../types/navigation.type';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const PUBLIC_SCREENS = (
	<>
		<Stack.Screen
			name={NAVIGATION_KEYS.LOGIN}
			component={LoginScreen}
			options={SCREEN_OPTIONS}
		/>
		<Stack.Screen
			name={NAVIGATION_KEYS.REGISTER}
			component={RegisterScreen}
			options={SCREEN_OPTIONS}
		/>
		<Stack.Screen
			name={NAVIGATION_KEYS.PIN_VERIFY}
			component={PinVerifyScreen}
			options={SCREEN_OPTIONS}
		/>
		<Stack.Screen
			name={NAVIGATION_KEYS.REGISTER_SUCCESS}
			component={RegisterSuccessScreen}
			options={SCREEN_OPTIONS}
		/>
	</>
);
