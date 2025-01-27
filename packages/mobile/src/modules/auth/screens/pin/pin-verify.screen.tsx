import React from 'react';
import { Text } from 'react-native';
import { PinInput } from '../../components/pin';
import { Layout } from 'src/shared/componetnts/layouts/layout';
import { H1 } from 'src/shared/componetnts/texts/h1';
import { Subtitle } from 'src/shared/componetnts/texts/subtitle';

export const PinVerifyScreen = () => {
	return (
		<Layout>
			<H1 text="Email Verification" />

			<Subtitle text="Please type the code from the email" />

			<PinInput />
		</Layout>
	);
};
