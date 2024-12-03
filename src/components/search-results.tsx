import { useMemo } from 'react';
import { ProductItem } from './product-item';

interface SearchResultsProps {
	results: Array<{
		id: number;
		price: number;
		title: string;
	}>;
}

export function SearchResults({ results }: SearchResultsProps) {
	const totalPrice = useMemo(() => {
		return results.reduce((total, product) => {
			return total + product.price;
		}, 0);
	}, [results]);

	return (
		<div>
			<h2>{totalPrice}</h2>

			{results.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</div>
	);
}
