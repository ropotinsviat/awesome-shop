import {
	Controller,
	Get,
	Post,
	Put,
	Delete,
	Body,
	Param,
	Query,
	UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { QueryProductsDto } from './dto/query-products.dto';
import { Product, Role, User } from '@prisma/client';
import { Public } from '@/auth/decorators/public.decorator';
import { RolesGuard } from '@/auth/guards/roles.guard';
import { Roles } from '@/auth/decorators/roles.decorator';
import { GetUser } from '@/auth/decorators/get-user.decorator';

@UseGuards(RolesGuard)
@Controller('products')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Roles(Role.ADMIN)
	@Post()
	async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
		return this.productService.create(createProductDto);
	}

	@Get()
	async findMany(@Query() query: QueryProductsDto): Promise<Product[]> {
		const { name, sortOrder, page, limit } = query;
		return this.productService.get(name, sortOrder, page, limit);
	}

	@Get(':id')
	async findOne(@Param('id') id: string): Promise<Product | null> {
		return this.productService.getById(id);
	}

	@Roles(Role.ADMIN)
	@Put(':id')
	async update(
		@Param('id') id: string,
		@Body() updateProductDto: UpdateProductDto,
	): Promise<Product> {
		return this.productService.update(id, updateProductDto);
	}

	@Roles(Role.ADMIN)
	@Delete(':id')
	async remove(@Param('id') id: string): Promise<Product> {
		return this.productService.delete(id);
	}
}
