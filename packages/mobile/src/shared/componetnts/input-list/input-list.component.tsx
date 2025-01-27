import React from 'react';
import { View } from 'react-native';
import { styles } from './input-list.styles';

type InputListProps = {
	children: React.ReactNode;
};

export function InputList({ children }: InputListProps) {
	return (
		<View style={styles.container}>
			{React.Children.map(children, (child, index) => {
				if (!child) return null;

				return (
					<View style={index > 0 ? styles.child : ''}>{child}</View>
				);
			})}
		</View>
	);
}
