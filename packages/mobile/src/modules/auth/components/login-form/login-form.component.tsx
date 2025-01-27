import * as React from 'react';
import { Input } from 'src/shared/componetnts/input';
import { Button } from 'src/shared/componetnts/button';
import { PasswordInput } from 'src/shared/componetnts/password-input/password-input.component';
import { View } from 'react-native';
import { styles } from './login-form.styles';
import { validationRules } from '../../../../shared/utils/validation/validationRules';
import { useLogin } from '../../hooks/useLogin';
import { InputList } from 'src/shared/componetnts/input-list';
import { IndentLayout } from 'src/shared/componetnts/layouts/indent-layout';

export const LoginForm = () => {
	const { control, onSubmit, isSubmitting } = useLogin();

	return (
		<IndentLayout>
			<InputList>
				<Input
					name="email"
					control={control}
					defaultValue=""
					label="Email"
					rules={validationRules.email}
				/>

				<PasswordInput
					name="password"
					control={control}
					defaultValue=""
					label="Password"
					rules={validationRules.password}
				/>
			</InputList>

			<Button title="Sign In" onPress={onSubmit} loading={isSubmitting} />
		</IndentLayout>
	);
};
