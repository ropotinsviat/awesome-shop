import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Animated, {
	useAnimatedStyle,
	withTiming,
	useSharedValue,
} from 'react-native-reanimated';
import { styles } from './expandable.styles';

type ExpandableCardProps = {
	title: string;
	text: string;
};

export const ExpandableCard = ({ title, text }: ExpandableCardProps) => {
	const [expanded, setExpanded] = useState(false);
	const contentHeight = useSharedValue(0);
	const rotation = useSharedValue(0);

	const animatedStyle = useAnimatedStyle(() => ({
		height: withTiming(expanded ? contentHeight.value : 0, {
			duration: 200,
		}),
	}));

	const arrowStyle = useAnimatedStyle(() => ({
		transform: [
			{
				rotate: withTiming(expanded ? '90deg' : '0deg', {
					duration: 200,
				}),
			},
		],
	}));

	const toggleExpand = () => {
		setExpanded((prev) => !prev);
		rotation.value = expanded ? 45 : 90;
	};

	return (
		<View style={styles.container}>
			<Pressable style={styles.cardHeader} onPress={toggleExpand}>
				<Text style={styles.title}>{title}</Text>
				<Animated.View style={[styles.arrow, arrowStyle]}>
					<AntDesign name="right" size={20} />
				</Animated.View>
			</Pressable>

			<Animated.View style={[styles.cardBody, animatedStyle]}>
				<View
					style={styles.hiddenContent}
					onLayout={(e) => {
						contentHeight.value = e.nativeEvent.layout.height;
					}}
				>
					<Text style={styles.text}>{text}</Text>
				</View>
			</Animated.View>
		</View>
	);
};
