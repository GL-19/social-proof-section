import styled from "styled-components";

import { RatingWrapper } from "../components/Rating/styles";
import { CardWrapper } from "../components/Card/styles";

import bgTopDesktop from "../images/bg-pattern-top-desktop.svg";
import bgTopMobile from "../images/bg-pattern-top-mobile.svg";
import bgBottomDesktop from "../images/bg-pattern-bottom-desktop.svg";
import bgBottomMobile from "../images/bg-pattern-bottom-mobile.svg";

export const TextWrapper = styled.section`
	padding: 0 20px;
	margin: 20px 0;
	grid-area: text;

	h1 {
		text-align: center;
		color: hsl(300, 43%, 22%);
		font-size: 32px;
		font-weight: 700;
		line-height: 32px;

		margin-bottom: 30px;
	}

	p {
		text-align: center;
		color: hsl(303, 10%, 53%);
	}

	@media screen and (min-width: 850px) {
		padding: 0;

		p {
			text-align: start;
		}

		h1 {
			text-align: start;

			font-size: 38px;
			line-height: 38px;
			margin-bottom: 15px;
		}
	}
`;

export const RatingsWrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;

	margin: 20px 0;

	grid-area: ratings;

	@media screen and (min-width: 850px) {
		align-items: flex-end;
		column-gap: 15px;

		& ${RatingWrapper}:nth-child(1) {
			margin-right: 100px;
		}

		& ${RatingWrapper}:nth-child(2) {
			margin-right: 50px;
		}
	}
`;

export const CardsWrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	gap: 15px;
	margin: 30px 0;

	grid-area: cards;

	@media screen and (min-width: 850px) {
		flex-direction: row;
		justify-content: space-between;

		align-self: flex-start;
		gap: 30px;

		& ${CardWrapper}:nth-child(1) {
			margin-bottom: 50px;
		}

		& ${CardWrapper}:nth-child(2) {
			margin-bottom: 25px;
		}
	}
`;

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 50px 0;

	background: url(${bgTopMobile}) top left no-repeat, url(${bgBottomMobile}) bottom right no-repeat;

	@media screen and (min-width: 850px) {
		width: 100vw;
		height: 100vh;
		padding: 100px 150px;

		display: grid;
		grid-template-columns: 420px 600px;
		grid-template-rows: auto auto;
		grid-template-areas:
			"text ratings"
			"cards cards";

		justify-content: center;
		align-content: center;

		background: url(${bgTopDesktop}) top left no-repeat,
			url(${bgBottomDesktop}) center right no-repeat;
	}
`;
