import { IsOptional, IsString, IsIn, IsNumber, Min } from 'class-validator';
import { Transform } from 'class-transformer';
import { DeliveryStatus, PaymentStatus } from '@prisma/client';

export class QueryOrdersDto {
	@IsOptional()
	@IsString()
	paymentStatus?: PaymentStatus;

	@IsOptional()
	@IsString()
	deliveryStatus?: DeliveryStatus;

	@IsOptional()
	@IsIn(['asc', 'desc'])
	sortOrder?: 'asc' | 'desc';

	@IsOptional()
	@Transform(({ value }) => parseInt(value, 10))
	@IsNumber()
	@Min(1)
	page?: number = 1;

	@IsOptional()
	@Transform(({ value }) => parseInt(value, 10))
	@IsNumber()
	@Min(1)
	limit?: number = 10;
}
