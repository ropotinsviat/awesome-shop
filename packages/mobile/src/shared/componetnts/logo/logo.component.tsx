import { Image, Text, View } from 'react-native';
import { styles } from './logo.styles';

export function Logo() {
	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={require('assets/png/logo.png')}
			/>
			<Text style={styles.text}>Awesome Store</Text>
		</View>
	);
}
