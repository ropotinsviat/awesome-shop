import { Body, Controller, Get, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { GetUser } from '@/auth/decorators/get-user.decorator';
import { EditUserDto } from './dto/edit-user.dto';
import { setPasswordDto } from './dto/set-password.dto';
import { ApiResponse } from '@/shared/types';
import { User } from '@prisma/client';
import { UserInfoDto } from './dto/user-info.dto';

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('me')
	async getUser(@GetUser('sub') userId: string): Promise<UserInfoDto> {
		return this.userService.getUserInfo(userId);
	}

	@Put('me')
	async editUser(
		@GetUser('sub') userId: string,
		@Body() editUserDto: EditUserDto,
	): Promise<ApiResponse> {
		return this.userService.setUser(userId, editUserDto);
	}

	@Put('me/password')
	async editPassword(
		@GetUser('sub') userId: string,
		@Body() setPasswordDto: setPasswordDto,
	): Promise<ApiResponse> {
		return this.userService.setPassword(userId, setPasswordDto);
	}
}
