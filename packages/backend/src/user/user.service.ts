import { HashUtil } from '@/shared/utils/hash.util';
import {
	ConflictException,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { SecurePinUtil } from '@/shared/utils/secure-pin.util';
import { User } from '@prisma/client';
import { EditUserDto } from './dto/edit-user.dto';
import { setPasswordDto } from './dto/set-password.dto';
import { ApiResponse } from '@/shared/types';
import { plainToInstance } from 'class-transformer';
import { UserInfoDto } from './dto/user-info.dto';

@Injectable()
export class UserService {
	constructor(private readonly prisma: PrismaService) {}

	async create(createUserDto: CreateUserDto): Promise<User> {
		const { email, password, name, phone, address } = createUserDto;

		const existingUser = await this.prisma.user.findUnique({
			where: { email },
		});

		if (existingUser) {
			throw new ConflictException('A user with this email already exists.');
		}

		const pinCode = SecurePinUtil.generate();
		const hashedPassword = await HashUtil.hashPassword(password);

		return this.prisma.user.create({
			data: { email, password: hashedPassword, name, phone, address, pinCode },
		});
	}

	async setUser(
		userId: string,
		editUserDto: EditUserDto,
	): Promise<ApiResponse> {
		await this.prisma.user.update({
			where: { id: userId },
			data: editUserDto,
		});

		return { message: 'Profile edited successfully' };
	}

	async setPassword(
		userId: string,
		setPasswordDto: setPasswordDto,
	): Promise<ApiResponse> {
		const { newPassword, oldPassword } = setPasswordDto;
		const user = await this.prisma.user.findUniqueOrThrow({
			where: { id: userId },
		});

		if (!(await HashUtil.comparePassword(oldPassword, user.password))) {
			throw new UnauthorizedException('Invalid old password.');
		}

		const hashedPassword = await HashUtil.hashPassword(newPassword);

		await this.prisma.user.update({
			where: { id: userId },
			data: { password: hashedPassword },
		});

		return { message: 'Password changed successfully' };
	}

	async setCode(email: string): Promise<User> {
		const pinCode = SecurePinUtil.generate();
		return this.prisma.user.update({ where: { email }, data: { pinCode } });
	}

	async setVerified(id: string): Promise<User> {
		return this.prisma.user.update({
			where: { id },
			data: { isVerified: true, pinCode: null },
		});
	}

	async findByEmail(email: string): Promise<User | null> {
		return this.prisma.user.findUnique({ where: { email } });
	}

	async getUserInfo(id: string): Promise<UserInfoDto> {
		const user = await this.prisma.user.findUniqueOrThrow({ where: { id } });

		return plainToInstance(UserInfoDto, user, {
			excludeExtraneousValues: true,
		});
	}
}
