import React, { memo } from 'react';
import ReviewStars from './components/review_stars';
import useWindowSize from './hooks/useWindowSize';
import useRandomProduct from './hooks/useRandomProduct';
import { ProductCard, ProductImage } from './AppStyles';

function App() {
	const screen = useWindowSize();
	const randomProduct = useRandomProduct();
	const {
		product_name,
		product_image,
		avg_product_review,
		in_stock,
		product_price,
		product_description,
	} = randomProduct;
	return (
		<ProductCard>
			<header>
				<h3>{product_name}</h3>
			</header>
			<ProductImage src="https://source.unsplash.com/random/225x150" alt="product image" />
			<ReviewStars rating={avg_product_review} maxRating={5} />
			<header>
				<h5>{product_price}</h5>
				<h5>{screen.isMobileVerticle.toString()}</h5>
				<h5>{in_stock ? 'In Stock' : 'Out of Stock'}</h5>
			</header>
			<aside>
				<p>{product_description}</p>
			</aside>
		</ProductCard>
	);
}

export default memo(App);
