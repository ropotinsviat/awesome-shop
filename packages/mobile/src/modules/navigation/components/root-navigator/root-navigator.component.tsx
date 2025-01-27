import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavContainer } from '../nav-container/nav-container.component';
import { RootStackParamList } from '../../types/navigation.type';
import { PUBLIC_SCREENS } from '../../constants/public-screens.const';
import { PROTECTED_SCREENS } from '../../constants/protected-screens.const';
import { useAuthStore } from 'src/store/auth.store';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
	const isAuth = useAuthStore((state) => state.isAuth);

	return (
		<NavContainer>
			<Stack.Navigator>
				{isAuth ? PROTECTED_SCREENS : PUBLIC_SCREENS}
			</Stack.Navigator>
		</NavContainer>
	);
};
