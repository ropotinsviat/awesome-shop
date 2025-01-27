import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { productService } from 'src/services/product/product.service';
import { Product, SortOrder } from 'src/services/product/product.types';
import { useAsync } from 'src/shared/hooks/useAsync';
import { useDebounceEffect } from 'src/shared/hooks/useDebounceEffect';
import { toast } from 'src/shared/utils/toast';

export function useProductsList(searchTerm: string, selectedSort: SortOrder) {
	const [products, setProducts] = useState<Product[]>([]);

	const currPage = useRef(1);
	const reachedEnd = useRef(false);

	const fetchProducts = async (name: string, sortOrder: SortOrder) => {
		try {
			currPage.current = 1;
			reachedEnd.current = false;

			const products = await productService.getMany({
				name,
				sortOrder,
				page: 1,
			});

			setProducts(products);
		} catch (e: unknown) {
			if (axios.isAxiosError(e)) {
				toast.error(e.response?.data?.message);
			}
		}
	};

	const nextPage = async (name: string, sortOrder: SortOrder) => {
		if (reachedEnd.current) return;

		try {
			const products = await productService.getMany({
				name,
				sortOrder,
				page: ++currPage.current,
			});

			if (products.length < 10) reachedEnd.current = true;

			setProducts((prev) => [...prev, ...products]);
		} catch (e: unknown) {
			if (axios.isAxiosError(e)) {
				toast.error(e.response?.data?.message);
			}
		}
	};

	const { loading: loadingProducts, execute: executeFetchProducts } =
		useAsync(fetchProducts);

	const { loading: loadingNextPage, execute: executeNextPage } =
		useAsync(nextPage);

	const handleFetchProducts = () => {
		executeFetchProducts(searchTerm, selectedSort);
	};

	const handleNextPage = () => {
		executeNextPage(searchTerm, selectedSort);
	};

	useEffect(() => {
		handleFetchProducts();
	}, []);

	useDebounceEffect(
		() => {
			handleFetchProducts();
		},
		[searchTerm],
		500,
	);

	useEffect(() => {
		handleFetchProducts();
	}, [selectedSort]);

	return {
		products,
		loadingProducts,
		loadingNextPage,
		handleFetchProducts,
		handleNextPage,
	};
}
