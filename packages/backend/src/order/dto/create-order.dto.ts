import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CartItem } from '../types';

export class CreateOrderDto {
	@IsArray()
	@IsNotEmpty()
	cart: CartItem[];
}
