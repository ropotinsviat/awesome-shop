import axios from 'axios';
import { useForm } from 'react-hook-form';
import { userService } from 'src/services/user/user.service';
import { toast } from 'src/shared/utils/toast';

type EditPasswordForm = {
	oldPassword: string;
	newPassword: string;
	confirmNewPassword: string;
};

export const useEditPassword = () => {
	const {
		control,
		watch,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<EditPasswordForm>({
		defaultValues: {
			oldPassword: '',
			newPassword: '',
			confirmNewPassword: '',
		},
	});

	const newPassword = watch('newPassword');

	const onSubmit = async (data: EditPasswordForm) => {
		try {
			const { confirmNewPassword, ...payload } = data;

			const response = await userService.editPassword(payload);

			toast.success(response.message);
		} catch (e: unknown) {
			if (axios.isAxiosError(e)) {
				toast.error(e.response?.data?.message);
			}
		}
	};

	return {
		control,
		onSubmit: handleSubmit(onSubmit),
		newPassword,
		isSubmitting,
	};
};
