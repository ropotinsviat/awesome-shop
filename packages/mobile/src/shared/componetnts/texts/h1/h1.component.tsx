import * as React from 'react';
import { styles } from './h1.styles';
import { Text, View } from 'react-native';

interface H1Props {
	text: string;
}

export const H1 = ({ text }: H1Props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{text}</Text>
		</View>
	);
};
