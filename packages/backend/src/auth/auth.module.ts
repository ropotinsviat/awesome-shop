import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from '@/config/jwt.config';
import { AtStrategy } from './strategies/at.strategy';
import { EmailModule } from '@/email/email.module';
import { UserModule } from '@/user/user.module';

@Module({
	imports: [EmailModule, UserModule, JwtModule.register(jwtConfig)],
	controllers: [AuthController],
	providers: [AuthService, AtStrategy],
})
export class AuthModule {}
