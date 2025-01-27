import { Pressable, Text, View } from 'react-native';
import { styles } from './cart-card.styles';
import { CardWrapper } from 'src/shared/componetnts/card-wrapper/card-wrapper.component';
import { Product } from 'src/services/product/product.types';
import TrashIcon from 'assets/svg/trash';
import { COLORS } from 'src/shared/styles';

interface CartCardProps {
	name: string;
	total: number;
	quantity: number;
	onPress?: () => void;
	onCanPress?: () => void;
}

export const CartCard = ({
	name,
	total,
	quantity,
	onPress,
	onCanPress,
}: CartCardProps) => {
	return (
		<Pressable onPress={onPress}>
			<CardWrapper>
				<View style={styles.container}>
					<View>
						<View style={styles.textBlock}>
							<Text style={styles.plainText}>{name}</Text>
						</View>
						<View style={styles.totalAmountBlock}>
							<View style={styles.textBlock}>
								<Text style={styles.strongText}>Total: </Text>
								<Text style={styles.plainText}>${total}</Text>
							</View>
							<View style={styles.textBlock}>
								<Text style={styles.strongText}>Amount: </Text>
								<Text style={styles.plainText}>{quantity}</Text>
							</View>
						</View>
					</View>

					{onCanPress && (
						<Pressable onPress={onCanPress}>
							<TrashIcon
								width={22}
								height={22}
								stroke={COLORS.lightRed}
							/>
						</Pressable>
					)}
				</View>
			</CardWrapper>
		</Pressable>
	);
};
