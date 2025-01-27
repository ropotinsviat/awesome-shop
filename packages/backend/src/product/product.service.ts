import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
	constructor(private readonly prisma: PrismaService) {}

	async create(createProductDto: CreateProductDto): Promise<Product> {
		return this.prisma.product.create({ data: createProductDto });
	}

	async getById(id: string): Promise<Product | null> {
		return this.prisma.product.findUnique({ where: { id } });
	}

	async update(
		id: string,
		updateProductDto: UpdateProductDto,
	): Promise<Product> {
		return this.prisma.product.update({
			where: { id },
			data: updateProductDto,
		});
	}

	async delete(id: string): Promise<Product> {
		return this.prisma.product.delete({ where: { id } });
	}

	async get(
		name?: string,
		sortOrder?: 'asc' | 'desc',
		page: number = 1,
		limit: number = 10,
	): Promise<Product[]> {
		const skip = (page - 1) * limit;

		return this.prisma.product.findMany({
			where: {
				name: name ? { contains: name, mode: 'insensitive' } : undefined,
			},
			orderBy: sortOrder ? { price: sortOrder } : undefined,
			skip,
			take: limit,
		});
	}

	async updateProductQuantity(
		prisma: Prisma.TransactionClient,
		productId: string,
		quantityChange: number,
	): Promise<Product> {
		const product = await prisma.product.findUnique({
			where: { id: productId },
		});

		if (!product) {
			throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
		}

		const newQuantity = product.quantity + quantityChange;

		if (newQuantity < 0) {
			throw new HttpException(
				`Insufficient product quantity: ${product.name}.`,
				HttpStatus.BAD_REQUEST,
			);
		}

		const updatedProduct = await prisma.product.update({
			where: { id: productId },
			data: { quantity: newQuantity },
		});

		return updatedProduct;
	}
}
