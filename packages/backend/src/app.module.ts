import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './auth/guards/at.guard';
import { EmailModule } from './email/email.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { PaymentModule } from './payment/payment.module';

@Module({
	imports: [PrismaModule, AuthModule, ProductModule, UserModule, EmailModule, OrderModule, OrderDetailModule, PaymentModule],
	providers: [{ provide: APP_GUARD, useClass: AtGuard }],
})
export class AppModule {}
