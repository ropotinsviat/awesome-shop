import * as React from 'react';
import { Input } from 'src/shared/componetnts/input';
import { PasswordInput } from 'src/shared/componetnts/password-input/password-input.component';
import { Button } from 'src/shared/componetnts/button';
import { useRegister } from '../../hooks/useRegister';
import { View } from 'react-native';
import { InputList } from 'src/shared/componetnts/input-list';
import { validationRules } from '../../../../shared/utils/validation/validationRules';
import { IndentLayout } from 'src/shared/componetnts/layouts/indent-layout';
import { styles } from './register-form.styles';

export const RegisterForm = () => {
	const { control, onSubmit, password, isSubmitting } = useRegister();

	return (
		<IndentLayout>
			<InputList>
				<Input
					name="email"
					control={control}
					defaultValue="ropotyn326@gmail.com"
					label="Email"
					rules={validationRules.email}
				/>

				<Input
					name="name"
					control={control}
					defaultValue="Rosvat"
					label="Full Name"
					rules={validationRules.name}
				/>

				<Input
					name="phone"
					control={control}
					defaultValue="+380988005522"
					label="Phone Number"
					rules={validationRules.phone}
				/>

				<Input
					name="address"
					control={control}
					defaultValue="Odesa"
					label="Shipping Address"
					rules={validationRules.shippingAddress}
				/>

				<PasswordInput
					name="password"
					control={control}
					defaultValue="11  11"
					label="Password"
					rules={validationRules.password}
				/>

				<PasswordInput
					name="confirmPassword"
					control={control}
					defaultValue="11  11"
					label="Confirm Password"
					rules={validationRules.confirmPassword(password)}
				/>
			</InputList>

			<Button
				title="Sign Up"
				onPress={onSubmit}
				loading={isSubmitting}
				extraButtonStyles={styles.button}
			/>
		</IndentLayout>
	);
};
