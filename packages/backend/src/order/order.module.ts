import { MiddlewareConsumer, Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { ProductModule } from '@/product/product.module';
import { OrderDetailModule } from '@/order-detail/order-detail.module';
import { setEntityMiddleware } from '@/shared/middlewares/set-entity.middleware';
import { IsExistMiddleware } from '@/shared/middlewares/is-exist.middleware';
import { PaymentModule } from '@/payment/payment.module';

@Module({
	imports: [ProductModule, OrderDetailModule, PaymentModule],
	controllers: [OrderController],
	providers: [OrderService],
})
export class OrderModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(setEntityMiddleware('order'), IsExistMiddleware)
			.forRoutes('orders/user/:id');
		consumer
			.apply(setEntityMiddleware('orderDetail'), IsExistMiddleware)
			.forRoutes('orders/user/:orderId/order-details/:id');
	}
}
