import styled from 'styled-components';
import palette from '../../constants/palette';

export const PartialStarContainer = styled.div`
	margin: auto 0;
	position: relative;
	display: inline-block;
	padding: 0;
`;

export const PartialStar = styled.div`
	color: ${palette.teal};
	padding: 0;
	position: absolute;
	z-index: 1;
	top: 0;
	left: 0;
	overflow: hidden;
	width: ${props => props.percent || '0%'};
`;

export const Star = styled.div`
	color: ${palette.teal};
	padding: 0;
	z-index: 0;
`;

export const Rating = styled.div`
	margin: auto;
	color: ${palette.gray2};
	font-size: 1.4rem;
`;

export const Stars = styled.div`
	margin: auto;
	font-size: 1.4rem;
`;

export const ReviewWrapper = styled.div`
	min-height: 3rem;
	display: flex;
	align-content: center;
	justify-content: space-around;
	margin-left: 0.8rem;
`;
