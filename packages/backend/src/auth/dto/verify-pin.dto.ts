import { IsEmail, IsNotEmpty, IsNumberString, Length } from 'class-validator';

export class VerifyPinDto {
	@IsEmail()
	email: string;

	@IsNotEmpty()
	@IsNumberString()
	@Length(4, 4)
	pin: string;
}
