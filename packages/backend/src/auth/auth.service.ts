import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HashUtil } from '../shared/utils/hash.util';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { EmailService } from '@/email/email.service';
import { UserService } from '@/user/user.service';
import { getVerificationEmail } from '@/shared/utils/email-verification-template.util';
import { ApiResponse } from '@/shared/types';
import { AccessTokenResponse } from './types';
import { User } from '@prisma/client';
import { NotVerifiedException } from './exceptions/not-verified.exception';

@Injectable()
export class AuthService {
	constructor(
		private readonly jwtService: JwtService,
		private readonly mailerService: EmailService,
		private readonly userService: UserService,
	) {}

	async register(registerDto: RegisterDto): Promise<ApiResponse> {
		const user = await this.userService.create(registerDto);

		this.sendCode(user);

		return {
			message: 'Registration successful. Check your email for verification.',
		};
	}

	async verifyPin(email: string, pin: string): Promise<ApiResponse> {
		const user = await this.userService.findByEmail(email);

		if (!user) {
			throw new UnauthorizedException('Invalid email.');
		}

		if (pin !== user.pinCode) {
			throw new UnauthorizedException('Invalid pin.');
		}

		await this.userService.setVerified(user.id);

		return { message: 'PIN verified successfully.' };
	}

	async login(loginDto: LoginDto): Promise<AccessTokenResponse> {
		const { email, password } = loginDto;

		const user = await this.userService.findByEmail(email);

		if (!user || !(await HashUtil.comparePassword(password, user.password))) {
			throw new UnauthorizedException('Invalid credentials.');
		}

		if (!user.isVerified) {
			const updatedUser = await this.userService.setCode(email);
			this.sendCode(updatedUser);
			throw new NotVerifiedException();
		}

		const payload = { sub: user.id, email: user.email, role: user.role };
		const accessToken = this.jwtService.sign(payload, {
			secret: process.env.JWT_SECRET,
		});

		return { accessToken };
	}

	async sendCode(user: User): Promise<void> {
		const mail = getVerificationEmail(user.name, String(user.pinCode));
		this.mailerService.sendMail(user.email, mail.subject, mail.body);
	}
}
