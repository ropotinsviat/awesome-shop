import React, { useRef, useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import { Controller } from 'react-hook-form';
import { styles } from './pin.styles';
import { Button } from 'src/shared/componetnts/button';
import { usePin } from '../../hooks/usePin';
import { validationRules } from '../../../../shared/utils/validation/validationRules';
import {
	CodeField,
	Cursor,
	useBlurOnFulfill,
	useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { IndentLayout } from 'src/shared/componetnts/layouts/indent-layout';

export const PinInput = () => {
	const { control, onSubmit, isSubmitting } = usePin();

	const cellCount = 4;

	return (
		<IndentLayout>
			<View style={styles.body}>
				<Controller
					name="pin"
					control={control}
					defaultValue=""
					rules={validationRules.pin(cellCount)}
					render={({ field: { onChange, value } }) => {
						const ref = useBlurOnFulfill({ value, cellCount });
						const [props, getCellOnLayoutHandler] =
							useClearByFocusCell({ value, setValue: onChange });

						return (
							<CodeField
								ref={ref}
								{...props}
								value={value}
								onChangeText={onChange}
								cellCount={cellCount}
								keyboardType="number-pad"
								textContentType="oneTimeCode"
								renderCell={({ index, symbol, isFocused }) => (
									<Text
										key={index}
										style={[
											styles.cell,
											isFocused && styles.focusCell,
										]}
										onLayout={getCellOnLayoutHandler(index)}
									>
										{symbol ||
											(isFocused ? <Cursor /> : null)}
									</Text>
								)}
							/>
						);
					}}
				/>
			</View>

			<Button
				extraButtonStyles={styles.button}
				title="Submit"
				onPress={onSubmit}
				loading={isSubmitting}
			/>
		</IndentLayout>
	);
};
