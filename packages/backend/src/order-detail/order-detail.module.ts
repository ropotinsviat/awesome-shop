import { Module } from '@nestjs/common';
import { OrderDetailService } from './order-detail.service';
import { ProductModule } from '@/product/product.module';

@Module({
	imports: [ProductModule],
	providers: [OrderDetailService],
	exports: [OrderDetailService],
})
export class OrderDetailModule {}
