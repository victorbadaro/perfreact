interface AddProductToWishlistProps {
	onAddToWishlist: () => void;
	onRequestClose: () => void;
}

export function AddProductToWishlist({ onAddToWishlist, onRequestClose }: AddProductToWishlistProps) {
	return (
		<span>
			Do you really want to add this product to your wishlist?
			<button type="button" onClick={onAddToWishlist}>
				Yes
			</button>
			<button type="button" onClick={onRequestClose}>
				No
			</button>
		</span>
	);
}
