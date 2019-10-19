import { useState } from 'react';
import PropTypes from 'prop-types';
import * as mockReviews from '../mockReviews.json';

const TOTAL_MOCK_REVIEWS = 100;
const randomProductIndex = () => {
	return Math.floor(Math.random() * Math.floor(TOTAL_MOCK_REVIEWS - 1));
};

const useRandomProduct = () => {
	const randomIndex = randomProductIndex();
	const newRandomProduct = mockReviews.default[randomIndex];
	const {
		product_name,
		product_image,
		avg_product_review,
		product_price,
		in_stock,
		product_description,
	} = newRandomProduct;

	const [randomProduct, setRandomProduct] = useState({
		product_name,
		product_price,
		in_stock,
		avg_product_review,
		product_image,
		product_description,
	});

	return randomProduct;
};

useRandomProduct.propTypes = {
	product_name: PropTypes.string,
	product_price: PropTypes.number,
	in_stock: PropTypes.boolean,
	avg_product_review: PropTypes.number,
	product_image: PropTypes.string,
	product_description: PropTypes.string,
};

export default useRandomProduct;
