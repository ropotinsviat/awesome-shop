import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import {
	Control,
	FieldPath,
	FieldPathValue,
	FieldValues,
} from 'react-hook-form';
import { Input } from '../input';
import { styles } from './password-input.styles';
import { Ionicons } from '@expo/vector-icons';

type PasswordInputProps<
	T extends FieldValues = FieldValues,
	N extends FieldPath<T> = FieldPath<T>,
> = {
	name: FieldPath<T>;
	control: Control<T>;
	defaultValue: FieldPathValue<T, N>;
	rules?: any;
	label?: string;
	extraInputContainerStyles?: any;
	extraErrorStyles?: any;
	iconColor?: string;
	iconSize?: number;
};

export function PasswordInput<T extends FieldValues>({
	name,
	control,
	defaultValue,
	rules,
	label = 'Password',
	extraInputContainerStyles,
	extraErrorStyles,
	iconColor = 'gray',
	iconSize = 25,
}: PasswordInputProps<T>) {
	const [isPasswordVisible, setPasswordVisible] = useState(false);

	return (
		<View style={[styles.container, extraInputContainerStyles]}>
			<Input
				name={name}
				control={control}
				defaultValue={defaultValue}
				rules={rules}
				label={label}
				extraErrorStyles={extraErrorStyles}
				secureTextEntry={!isPasswordVisible}
			/>

			<TouchableOpacity
				style={styles.iconContainer}
				onPress={() => setPasswordVisible(!isPasswordVisible)}
			>
				<Ionicons
					name={isPasswordVisible ? 'eye' : 'eye-off'}
					size={iconSize}
					style={styles.icon}
					color={iconColor}
				/>
			</TouchableOpacity>
		</View>
	);
}
