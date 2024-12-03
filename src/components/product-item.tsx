import lodash from 'lodash';
import dynamic from 'next/dynamic';
import { memo, useState } from 'react';

const AddProductToWishlist = dynamic(
	async () => {
		const mod = await import('./add-product-to-wishlist');

		return mod.AddProductToWishlist;
	},
	{
		loading: () => <span>Carregando...</span>
	}
);

interface ProductItemProps {
	product: {
		id: number;
		price: number;
		title: string;
		priceFormatted: string;
	};
	onAddToWishList: (id: number) => void;
}

export function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
	const [isAddingToWishList, setIsAddingToWishList] = useState(false);

	return (
		<div>
			{product.title} - <strong>{product.priceFormatted}</strong>
			<button type="button" onClick={() => setIsAddingToWishList(true)}>
				Add to wishlist
			</button>
			{isAddingToWishList ? (
				<AddProductToWishlist onAddToWishlist={() => onAddToWishList(product.id)} onRequestClose={() => setIsAddingToWishList(false)} />
			) : null}
		</div>
	);
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
	return lodash.isEqual(prevProps.product, nextProps.product);
});
