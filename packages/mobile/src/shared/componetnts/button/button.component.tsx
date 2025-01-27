import React from 'react';
import {
	TouchableOpacity,
	Text,
	StyleProp,
	ViewStyle,
	TextStyle,
	ActivityIndicator,
	View,
} from 'react-native';
import { styles } from './button.styles';

type ButtonProps = {
	title: string;
	onPress: () => void;
	disabled?: boolean;
	loading?: boolean;
	extraButtonStyles?: StyleProp<ViewStyle>;
	extraTextStyles?: StyleProp<TextStyle>;
	children?: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
	title,
	onPress,
	disabled = false,
	loading = false,
	extraButtonStyles,
	extraTextStyles,
	children,
}) => {
	return (
		<TouchableOpacity
			style={[
				styles.button,
				(disabled || loading) && styles.disabledButton,
				extraButtonStyles,
			]}
			onPress={onPress}
			disabled={disabled || loading}
		>
			{loading ? (
				<ActivityIndicator
					style={styles.activityIndicator}
					color={styles.activityIndicator.color}
				/>
			) : (
				<View style={styles.content}>
					{children}
					<Text
						style={[
							styles.text,
							disabled && styles.disabledText,
							extraTextStyles,
						]}
					>
						{title}
					</Text>
				</View>
			)}
		</TouchableOpacity>
	);
};
