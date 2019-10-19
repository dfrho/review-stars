import React, { memo } from 'react';
import ReviewStars from './components/review_stars';
import useRandomProduct from './hooks/useRandomProduct';
import { ProductCard, ProductImage } from './AppStyles';

function App() {
	const randomProduct = useRandomProduct();
	const {
		product_name,
		avg_product_review,
		product_description,
	} = randomProduct;
	return (
		<ProductCard>
			<header>
				<h3>{product_name}</h3>
			</header>
			<ProductImage src="https://source.unsplash.com/random/225x150" alt="product image" />
			<ReviewStars rating={avg_product_review} maxRating={5} />
			<aside>
				<p>{product_description}</p>
			</aside>
		</ProductCard>
	);
}

export default memo(App);
