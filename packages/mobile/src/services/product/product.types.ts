export type Product = {
	id: string;
	name: string;
	description: string;
	price: number;
	category: string;
	quantity: number;
};

export type SortOrder = 'asc' | 'desc' | null;

export type QueryProductsBody = {
	name?: string;
	sortOrder?: SortOrder;
	page?: number;
	limit?: number;
};
