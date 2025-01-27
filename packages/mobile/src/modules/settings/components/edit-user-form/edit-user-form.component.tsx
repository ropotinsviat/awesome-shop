import * as React from 'react';
import { Button } from 'src/shared/componetnts/button';
import { InputList } from 'src/shared/componetnts/input-list';
import { validationRules } from 'src/shared/utils/validation/validationRules';
import { IndentLayout } from 'src/shared/componetnts/layouts/indent-layout';
import { styles } from './edit-user-form.styles';
import { useEditUser } from '../../hooks/useEditUser';
import { Input } from 'src/shared/componetnts/input';

export const EditUserForm = () => {
	const { control, onSubmit, isSubmitting } = useEditUser();

	return (
		<IndentLayout>
			<InputList>
				<Input
					name="email"
					control={control}
					defaultValue=""
					label="Email"
					rules={validationRules.email}
					editable={false}
				/>

				<Input
					name="name"
					control={control}
					defaultValue=""
					label="Full Name"
					rules={validationRules.name}
				/>

				<Input
					name="phone"
					control={control}
					defaultValue=""
					label="Phone Number"
					rules={validationRules.phone}
				/>

				<Input
					name="address"
					control={control}
					defaultValue=""
					label="Shipping Address"
					rules={validationRules.shippingAddress}
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
