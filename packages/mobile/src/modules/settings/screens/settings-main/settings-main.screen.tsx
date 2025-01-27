import { Header } from 'src/shared/componetnts/header';
import { Layout } from 'src/shared/componetnts/layouts/layout';
import { SettingsMenu } from '../../components/settings-menu';

export const SettingsMainScreen = () => {
	return (
		<Layout>
			<Header title="Settings" />

			<SettingsMenu />
		</Layout>
	);
};
