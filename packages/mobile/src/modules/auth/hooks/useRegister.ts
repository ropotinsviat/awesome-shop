import axios, { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/modules/navigation/types';
import { authService } from 'src/services/auth/auth.service';
import { toast } from 'src/shared/utils/toast';

type RegisterForm = {
	email: string;
	name: string;
	phone: string;
	address: string;
	password: string;
	confirmPassword: string;
};

export function useRegister() {
	const {
		control,
		watch,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<RegisterForm>({
		defaultValues: {
			email: '',
			name: '',
			phone: '',
			address: '',
			password: '',
			confirmPassword: '',
		},
	});

	const password = watch('password');

	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const onSubmit = async (data: RegisterForm) => {
		try {
			const { confirmPassword, ...payload } = data;

			await authService.register(payload);

			navigation.navigate(NAVIGATION_KEYS.PIN_VERIFY, {
				email: data.email,
			});
		} catch (e: unknown) {
			if (axios.isAxiosError(e)) {
				console.log(e);
				toast.error(e.response?.data?.message);
			}
		}
	};

	return {
		control,
		onSubmit: handleSubmit(onSubmit),
		password,
		isSubmitting,
	};
}
