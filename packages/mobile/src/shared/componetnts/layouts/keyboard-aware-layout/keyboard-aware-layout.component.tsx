import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface KeyboardAwareLayoutProps {
	children: React.ReactNode;
}

export const KeyboardAwareLayout = ({ children }: KeyboardAwareLayoutProps) => {
	return (
		<KeyboardAwareScrollView
			enableOnAndroid={true}
			keyboardShouldPersistTaps="handled"
			contentContainerStyle={{ flexGrow: 1 }}
			extraScrollHeight={20}
		>
			{children}
		</KeyboardAwareScrollView>
	);
};
