import { Layout } from 'src/shared/componetnts/layouts/layout';
import { FaqList } from '../../components/faq-list';
import { Header } from 'src/shared/componetnts/header';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/modules/navigation/types';

export const FaqScreen = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	const goToSettings = () =>
		navigation.navigate(NAVIGATION_KEYS.BOTTOMTABS, {
			screen: NAVIGATION_KEYS.SETTINGS,
		});

	return (
		<Layout>
			<Header title="FAQ" onBackPress={goToSettings} />

			<FaqList />
		</Layout>
	);
};
