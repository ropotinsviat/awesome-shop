import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Public } from './decorators/public.decorator';
import { VerifyPinDto } from './dto/verify-pin.dto';
import { ApiResponse } from '@/shared/types';
import { AccessTokenResponse } from './types';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Public()
	@Post('register')
	async register(@Body() registerDto: RegisterDto): Promise<ApiResponse> {
		return this.authService.register(registerDto);
	}

	@Public()
	@Post('verify-pin')
	async verifyPin(@Body() verifyPinDto: VerifyPinDto): Promise<ApiResponse> {
		return this.authService.verifyPin(verifyPinDto.email, verifyPinDto.pin);
	}

	@Public()
	@Post('login')
	async login(@Body() loginDto: LoginDto): Promise<AccessTokenResponse> {
		return this.authService.login(loginDto);
	}
}
