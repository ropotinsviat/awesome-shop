import { useForm } from 'react-hook-form';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/modules/navigation/types';
import { authService } from 'src/services/auth/auth.service';
import axios from 'axios';
import { toast } from 'src/shared/utils/toast';

type PinForm = {
	pin: string;
};

type PINVERIFYRouteProp = RouteProp<
	RootStackParamList,
	NAVIGATION_KEYS.PIN_VERIFY
>;

export function usePin() {
	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<PinForm>({
		defaultValues: { pin: '' },
	});

	const route = useRoute<PINVERIFYRouteProp>();
	const { email } = route.params;

	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const onSubmit = async (data: PinForm) => {
		const pin = data.pin;
		console.log(typeof pin);
		try {
			await authService.verifyPin({ email, pin });

			navigation.navigate(NAVIGATION_KEYS.REGISTER_SUCCESS);
		} catch (e: unknown) {
			if (axios.isAxiosError(e)) {
				console.log(e);
				toast.error(e.response?.data?.message);
			}
		}
	};

	return { control, onSubmit: handleSubmit(onSubmit), isSubmitting };
}
