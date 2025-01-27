import { randomInt } from 'crypto';

export class SecurePinUtil {
	static generate(): string {
		return randomInt(1000, 10000).toString();
	}
}
