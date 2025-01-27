import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './auth-link.styles';

type AuthLinkProps = {
	text: string;
	linkText: string;
	onPress: () => void;
};

export function AuthLink({ text, linkText, onPress }: AuthLinkProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{text} </Text>
			<TouchableOpacity onPress={onPress}>
				<Text style={styles.link}>{linkText}</Text>
			</TouchableOpacity>
		</View>
	);
}
