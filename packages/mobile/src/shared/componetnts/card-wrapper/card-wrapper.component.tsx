import { View } from 'react-native';
import { styles } from './card-wrapper.styles';

interface CardWrapperProps {
	children: React.ReactNode;
}

export const CardWrapper = ({ children }: CardWrapperProps) => {
	return <View style={styles.container}>{children}</View>;
};
