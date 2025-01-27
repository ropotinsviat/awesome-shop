import { useForm } from 'react-hook-form';
import { authService } from 'src/services/auth/auth.service';
import axios from 'axios';
import { toast } from 'src/shared/utils/toast';
import { useAuthStore } from 'src/store/auth.store';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/modules/navigation/types';

type LoginForm = {
	email: string;
	password: string;
};

export function useLogin() {
	const setIsAuth = useAuthStore((state) => state.setIsAuth);
	const setTokens = useAuthStore((state) => state.setTokens);

	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<LoginForm>({ defaultValues: { email: '', password: '' } });

	const onSubmit = async (data: LoginForm) => {
		try {
			const { accessToken } = await authService.login(data);

			setIsAuth(true);
			setTokens({ accessToken, refreshToken: null });
		} catch (e: unknown) {
			if (axios.isAxiosError(e)) {
				console.log(e);
				if (e.response?.data?.statusCode === 430) {
					navigation.navigate(NAVIGATION_KEYS.PIN_VERIFY, {
						email: data.email,
					});
				} else {
					toast.error(e.response?.data?.message);
				}
			}
		}
	};

	return { control, onSubmit: handleSubmit(onSubmit), isSubmitting };
}
