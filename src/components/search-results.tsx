import { List, type ListRowRenderer } from 'react-virtualized';
import { ProductItem } from './product-item';

interface SearchResultsProps {
	totalPrice: number;
	results: Array<{
		id: number;
		price: number;
		title: string;
		priceFormatted: string;
	}>;
	onAddToWishList: (id: number) => void;
}

export function SearchResults({ totalPrice, results, onAddToWishList }: SearchResultsProps) {
	const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
		return (
			<div key={key} style={style}>
				<ProductItem product={results[index]} onAddToWishList={onAddToWishList} />
			</div>
		);
	};

	return (
		<div>
			<h2>{totalPrice}</h2>

			{/* {results.map((product) => (
				<ProductItem key={product.id} product={product} onAddToWishList={onAddToWishList} />
			))} */}

			<List width={900} height={300} rowHeight={30} overscanRowCount={5} rowCount={results.length} rowRenderer={rowRenderer} />
		</div>
	);
}
