import axios from 'axios';
import { useForm } from 'react-hook-form';
import { userService } from 'src/services/user/user.service';
import { UserInfo } from 'src/services/user/user.types';
import { useAuth } from 'src/shared/context/auth';
import { toast } from 'src/shared/utils/toast';

type EditUserForm = {
	email: string;
	name: string;
	phone: string;
	address: string;
};

export const useEditUser = () => {
	const { user, fetchUser } = useAuth();

	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<EditUserForm>({
		defaultValues: {
			email: user ? user.email : '',
			name: user ? user.name : '',
			phone: user ? user.phone : '',
			address: user ? user.address : '',
		},
	});

	const onSubmit = async (data: EditUserForm) => {
		try {
			const { email, ...payload } = data;
			const response = await userService.editUser(payload);

			await fetchUser();

			toast.success(response.message);
		} catch (e: unknown) {
			if (axios.isAxiosError(e)) {
				toast.error(e.response?.data?.message);
			}
		}
	};

	return { control, onSubmit: handleSubmit(onSubmit), isSubmitting };
};
