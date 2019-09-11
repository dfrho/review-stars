import React from 'react';
import PropTypes from 'prop-types';

import { ReviewWrapper, PartialStarContainer, PartialStar, Star, Stars, Rating } from './styles';

function ReviewStars({ rating, maxRating }) {
	const roundRating = rating =>
		rating > 1 ? Number.parseFloat(rating).toPrecision(3) : Number.parseFloat(rating).toPrecision(1);
	const basify = rating => Math.floor(rating);
	const ratingPercent = (rating, maxRating) => `${(rating / maxRating) * 100}%`;

	const renderStars = (rating, maxRating) => {
		const baseRating = basify(rating),
			hasPartialStar = rating % 1 > 0,
			fullStars = Array.from(new Array(baseRating), (star, i) => <Star key={i}>★</Star>),
			emptyStarCount = rating >= maxRating - 1 ? 0 : maxRating - baseRating - 1,
			emptyStars = Array.from(new Array(emptyStarCount), (star, i) => <Star key={i}>☆</Star>);

		return (
			<React.Fragment>
				<figure style={{ display: 'flex' }}>
					{fullStars.map(star => star)}
					{hasPartialStar && (
						<PartialStarContainer>
							<PartialStar percent={ratingPercent(rating % 1, 1)}>★</PartialStar>
							<Star>☆</Star>
						</PartialStarContainer>
					)}
					{emptyStars.length > 0 && emptyStars.map(star => star)}
				</figure>
			</React.Fragment>
		);
	};

	return (
		<ReviewWrapper>
			<Rating>{roundRating(rating)}</Rating>
			<Stars>{renderStars(rating, maxRating)}</Stars>
		</ReviewWrapper>
	);
}

ReviewStars.propTypes = {
	rating: PropTypes.number.isRequired,
	maxRating: PropTypes.number.isRequired,
};

ReviewStars.defaultProps = {
	rating: 0,
	maxRating: 5,
};

export default ReviewStars;
