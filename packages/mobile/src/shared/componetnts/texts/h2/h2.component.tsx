import * as React from 'react';
import { styles } from './h2.styles';
import { Text, View } from 'react-native';

interface H2Props {
	text: string;
}

export const H2 = ({ text }: H2Props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{text}</Text>
		</View>
	);
};
