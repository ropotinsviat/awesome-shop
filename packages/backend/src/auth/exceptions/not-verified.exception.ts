import { HttpException, HttpStatus } from '@nestjs/common';

const NOT_VERIFIED_STATUS_CODE = 430;

export class NotVerifiedException extends HttpException {
	constructor() {
		super(
			{
				statusCode: NOT_VERIFIED_STATUS_CODE,
				message: 'User is not verified.',
			},
			NOT_VERIFIED_STATUS_CODE,
		);
	}
}
