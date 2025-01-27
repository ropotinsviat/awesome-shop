import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class EditUserDto {
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsString()
	@IsNotEmpty()
	phone: string;

	@IsString()
	@IsNotEmpty()
	address: string;
}
