import React from 'react';
import { View } from 'react-native';
import { faq } from '../../constants/faq.consts';
import { ExpandableCard } from 'src/shared/componetnts/cards/expandable';
import { styles } from './faq-list.styles';

export const FaqList = () => {
	return (
		<View style={styles.container}>
			{faq.map((faqItem) => (
				<ExpandableCard
					key={Math.random()}
					title={faqItem.title}
					text={faqItem.description}
				/>
			))}
		</View>
	);
};
