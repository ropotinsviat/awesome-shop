import * as React from 'react';
import { styles } from './subtitle.styles';
import { Text, View } from 'react-native';

interface SubtitleProps {
	text: string;
}

export const Subtitle = ({ text }: SubtitleProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{text}</Text>
		</View>
	);
};
