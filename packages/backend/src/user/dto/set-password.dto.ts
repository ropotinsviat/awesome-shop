import { IsString, MinLength } from 'class-validator';

export class setPasswordDto {
	@IsString()
	@MinLength(6)
	oldPassword: string;

	@IsString()
	@MinLength(6)
	newPassword: string;
}
