import * as React from 'react';
import { useProductsList } from '../../hooks/useProductsList';
import {
	ActivityIndicator,
	FlatList,
	RefreshControl,
	View,
} from 'react-native';
import { ProductCard } from '../../components/product-card';
import { Search } from '../../components/search';
import { useState } from 'react';
import { SortOrderSelect } from '../../components/sord-order-select';
import { SortOrder } from 'src/services/product/product.types';
import { styles } from './product-catalog.styles';
import { Subtitle } from 'src/shared/componetnts/texts/subtitle';

export const ProductCatalog = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const [selectedSort, setSelectedSort] = useState<SortOrder>(null);

	const {
		products,
		loadingProducts,
		loadingNextPage,
		handleNextPage,
		handleFetchProducts,
	} = useProductsList(searchTerm, selectedSort);

	return (
		<>
			<View style={styles.top}>
				<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

				<SortOrderSelect
					selectedSort={selectedSort}
					setSelectedSort={setSelectedSort}
				/>
			</View>

			<FlatList
				style={styles.list}
				data={products}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <ProductCard product={item} />}
				refreshControl={
					<RefreshControl
						refreshing={loadingProducts}
						onRefresh={handleFetchProducts}
					/>
				}
				onEndReached={handleNextPage}
				onEndReachedThreshold={0.5}
				ListFooterComponent={
					loadingNextPage ? <ActivityIndicator size="small" /> : null
				}
				ListEmptyComponent={
					!loadingProducts ? (
						<Subtitle text="No products available." />
					) : null
				}
			/>
		</>
	);
};
