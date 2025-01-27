import { IsOptional, IsString, IsNumber, Min } from 'class-validator';

export class UpdateProductDto {
	@IsOptional()
	@IsString()
	name?: string;

	@IsOptional()
	@IsString()
	description?: string;

	@IsOptional()
	@IsNumber()
	@Min(0)
	price?: number;

	@IsOptional()
	@IsString()
	category?: string;

	@IsOptional()
	@IsNumber()
	@Min(0)
	quantity?: number;
}
