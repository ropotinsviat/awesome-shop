import { HttpFactoryService } from 'src/shared/services/http-factory.service';
import { HttpService } from 'src/shared/services/http.service';
import { Product, QueryProductsBody } from './product.types';
import { EnhancedWithAuthHttpService } from 'src/shared/services/http-auth.service';

class ProductService {
	constructor(private readonly httpService: EnhancedWithAuthHttpService) {}

	getMany(query: QueryProductsBody): Promise<Product[]> {
		return this.httpService.get('products', { params: query });
	}

	getById(id: string): Promise<Product | null> {
		return this.httpService.get(`products/${id}`);
	}
}

export const productService = new ProductService(
	new HttpFactoryService().createAuthHttpService(),
);
