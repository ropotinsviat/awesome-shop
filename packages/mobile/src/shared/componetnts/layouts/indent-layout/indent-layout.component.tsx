import { FlatList, ScrollView, View } from 'react-native';
import { styles } from './indent-layout.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

type IndentLayoutProps = {
	children: React.ReactNode;
};

export const IndentLayout = ({ children }: IndentLayoutProps) => {
	return (
		<View style={styles.container}>
			{React.Children.map(children, (child) => {
				if (React.isValidElement(child) && child.type === FlatList) {
					return child;
				}

				return <View style={styles.childWrapper}>{child}</View>;
			})}
		</View>
	);
};
