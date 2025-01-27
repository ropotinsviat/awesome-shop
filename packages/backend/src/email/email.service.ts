import { Injectable } from '@nestjs/common';
import * as Brevo from '@getbrevo/brevo';
import { mailerConfig } from '@/config/mailer.config';

@Injectable()
export class EmailService {
	async sendMail(
		to: string,
		subject: string,
		content: string,
	): Promise<boolean> {
		try {
			const apiKey = process.env.BREVO_API_KEY;
			if (!apiKey) {
				throw new Error(
					'BREVO_API_KEY is not defined in the environment variables.',
				);
			}

			const apiInstance = new Brevo.TransactionalEmailsApi();
			apiInstance.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);

			const emailPayload = {
				sender: mailerConfig,
				to: [{ email: to }],
				subject,
				htmlContent: content,
			};

			await apiInstance.sendTransacEmail(emailPayload);

			console.log('Email sent successfully.');
			return true;
		} catch (error) {
			console.error('Error sending email:', error);
			return false;
		}
	}
}
