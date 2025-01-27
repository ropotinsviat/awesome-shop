import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './header.styles';
import { H2 } from '../texts/h2';
import { H1 } from '../texts/h1';
import ArrowBackIcon from 'assets/svg/back-arrow';

interface HeaderProps {
	children?: React.ReactNode;
	title: string;
	onBackPress?: () => void;
}

export const Header = ({ children, title, onBackPress }: HeaderProps) => {
	return (
		<View style={styles.container}>
			{onBackPress ? (
				<TouchableOpacity
					onPress={onBackPress}
					style={styles.backButton}
				>
					<ArrowBackIcon height={36} width={24} />
				</TouchableOpacity>
			) : null}

			<View style={styles.titleContainer}>
				<H1 text={title} />
			</View>
			<View style={styles.right}>{children}</View>
		</View>
	);
};
