import { Role } from '@prisma/client';
import { Exclude, Expose } from 'class-transformer';

export class UserInfoDto {
	@Expose()
	email: string;

	@Expose()
	name: string;

	@Expose()
	phone: string;

	@Expose()
	address: string;

	@Expose()
	role: Role;
}
