import axios from 'axios';
import { useEffect, useState } from 'react';
import { productService } from 'src/services/product/product.service';
import { Product } from 'src/services/product/product.types';
import { useAsync } from 'src/shared/hooks/useAsync';
import { toast } from 'src/shared/utils/toast';

export function useProduct(productId: string) {
	const [product, setProduct] = useState<Product | null>(null);

	const fetchProduct = async () => {
		try {
			const product = await productService.getById(productId);

			setProduct(product);
		} catch (e: unknown) {
			if (axios.isAxiosError(e)) {
				toast.error(e.response?.data?.message);
			}
		}
	};

	const { loading: loadingProduct, execute: executeFetchProduct } =
		useAsync(fetchProduct);

	useEffect(() => {
		executeFetchProduct();
	}, [productId]);

	return { product, loadingProduct };
}
