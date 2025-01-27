import { View } from 'react-native';
import { styles } from './layout.styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';

type LayoutProps = {
	children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
	const insets = useSafeAreaInsets();

	return (
		<View
			style={[
				styles.container,
				{ paddingTop: insets.top, paddingBottom: insets.bottom },
			]}
		>
			{children}
		</View>
	);
};
