import CheckmarkCircle from 'assets/svg/checkmark-circle';
import { View, Text } from 'react-native';
import { styles } from './success.styles';
import { Button } from '../button';
import { ReactNode } from 'react';

type SuccessProps = {
	text?: string;
	buttonTitle: string;
	buttonChildren?: ReactNode;
	onPress: () => void;
};

export function Success({
	text,
	buttonTitle,
	onPress,
	buttonChildren,
}: SuccessProps) {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<CheckmarkCircle fill={styles.svg.color} />

				<View style={styles.textWrapper}>
					<Text style={styles.text}>{text}</Text>
				</View>
			</View>

			<Button
				extraButtonStyles={styles.button}
				title={buttonTitle}
				onPress={onPress}
				children={buttonChildren}
			/>
		</View>
	);
}
