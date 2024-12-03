import { SearchResults } from '@/components/search-results';
import { type FormEvent, useCallback, useState } from 'react';

type Product = {
	id: number;
	price: number;
	title: string;
};

type Results = {
	totalPrice: number;
	data: Product[];
};

export default function Home() {
	const [search, setSearch] = useState('');
	const [results, setResults] = useState<Results>({
		totalPrice: 0,
		data: []
	});

	async function handleSearch(event: FormEvent) {
		event.preventDefault();

		if (!search.trim()) {
			return;
		}

		const response = await fetch(`http://localhost:3333/products?q=${search}`);
		const data = (await response.json()) as Product[];

		const totalPrice = data.reduce((total, product) => {
			return total + product.price;
		}, 0);

		setResults({ totalPrice, data });
	}

	const addToWishList = useCallback(async (id: number) => {
		console.log(id);
	}, []);

	return (
		<div>
			<h1>Search</h1>

			<form onSubmit={handleSearch}>
				<input type="text" value={search} onChange={(event) => setSearch(event.target.value)} />

				<button type="submit">Buscar</button>
			</form>

			<SearchResults results={results.data} totalPrice={results.totalPrice} onAddToWishList={addToWishList} />
		</div>
	);
}
