import { IsOptional, IsString, IsIn, IsNumber, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class QueryProductsDto {
	@IsOptional()
	@IsString()
	name?: string;

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
