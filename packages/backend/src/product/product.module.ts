import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { IsExistMiddleware } from '@/shared/middlewares/is-exist.middleware';
import { setEntityMiddleware } from '@/shared/middlewares/set-entity.middleware';

@Module({
	imports: [PrismaModule],
	providers: [ProductService],
	controllers: [ProductController],
	exports: [ProductService],
})
export class ProductModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(setEntityMiddleware('product'), IsExistMiddleware)
			.forRoutes('products/:id');
	}
}
