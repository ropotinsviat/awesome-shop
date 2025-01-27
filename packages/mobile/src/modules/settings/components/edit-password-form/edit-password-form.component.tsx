import * as React from 'react';
import { PasswordInput } from 'src/shared/componetnts/password-input/password-input.component';
import { Button } from 'src/shared/componetnts/button';
import { InputList } from 'src/shared/componetnts/input-list';
import { validationRules } from 'src/shared/utils/validation/validationRules';
import { IndentLayout } from 'src/shared/componetnts/layouts/indent-layout';
import { styles } from './edit-password-form.styles';
import { useEditPassword } from '../../hooks/useEditPassword';

export const EditPasswordForm = () => {
	const { control, onSubmit, newPassword, isSubmitting } = useEditPassword();

	return (
		<IndentLayout>
			<InputList>
				<PasswordInput
					name="oldPassword"
					control={control}
					defaultValue=""
					label="Old password"
					rules={validationRules.password}
				/>

				<PasswordInput
					name="newPassword"
					control={control}
					defaultValue=""
					label="New password"
					rules={validationRules.password}
				/>

				<PasswordInput
					name="confirmNewPassword"
					control={control}
					defaultValue=""
					label="Confirm new password"
					rules={validationRules.confirmPassword(newPassword)}
				/>
			</InputList>

			<Button
				title="Save"
				onPress={onSubmit}
				loading={isSubmitting}
				extraButtonStyles={styles.button}
			/>
		</IndentLayout>
	);
};
