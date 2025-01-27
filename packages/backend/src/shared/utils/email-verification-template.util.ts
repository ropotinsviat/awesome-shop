import { IMail } from '../types';

export function getVerificationEmail(name: string, pinCode: string): IMail {
	return {
		subject: 'Verify your email',
		body: `<p>Hi ${name},</p>
    <p>Thank you for registering. Your verification code: ${pinCode}</p>`,
	};
}
