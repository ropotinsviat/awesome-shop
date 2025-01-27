import React, { useState } from 'react';
import { styles } from './search.styles';
import { TextInput, View } from 'react-native';

interface SearchProps {
	searchTerm: string;
	setSearchTerm: (query: string) => void;
}

export const Search = ({ searchTerm, setSearchTerm }: SearchProps) => {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<View style={styles.container}>
			<TextInput
				style={[styles.input, isFocused && styles.focused]}
				placeholder="Search products..."
				value={searchTerm}
				onChangeText={setSearchTerm}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
		</View>
	);
};
