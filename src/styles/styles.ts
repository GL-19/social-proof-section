import styled from "styled-components";

import { RatingWrapper } from "../components/Rating/styles";
import { CardWrapper } from "../components/Card/styles";

import bgTopDesktop from "../images/bg-pattern-top-desktop.svg";
import bgTopMobile from "../images/bg-pattern-top-mobile.svg";
import bgBottomDesktop from "../images/bg-pattern-bottom-desktop.svg";
import bgBottomMobile from "../images/bg-pattern-bottom-mobile.svg";
import { mediaQuery } from "./GlobalStyle";

export const TextWrapper = styled.section`
	max-width: 40rem;
	padding: 0 1.25rem;
	margin: 1.25rem 0;
	grid-area: text;
	padding: 0;

	h1 {
		color: hsl(300, 43%, 22%);
		font-size: 2rem;
		font-weight: 700;

		line-height: 2rem;
		text-align: start;

		margin-bottom: 1rem;
	}

	p {
		text-align: start;
		color: hsl(303, 10%, 53%);
	}

	@media screen and (max-width: ${mediaQuery.desktop}) {
		h1,
		p {
			text-align: center;
		}
		h1 {
			margin-bottom: 2rem;
		}
	}

	@media screen and (max-width: ${mediaQuery.mobile}) {
		max-width: 20rem;
	}
`;

export const RatingsWrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	margin: 1.25rem 0;

	grid-area: ratings;

	@media screen and (min-width: ${mediaQuery.desktop}) {
		align-items: flex-end;
		column-gap: 1rem;

		& ${RatingWrapper}:nth-child(1) {
			margin-right: 6.25rem;
		}

		& ${RatingWrapper}:nth-child(2) {
			margin-right: 3rem;
		}
	}
`;

export const CardsWrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	gap: 1rem;
	margin: 2rem 0;

	grid-area: cards;

	@media screen and (min-width: ${mediaQuery.desktop}) {
		flex-direction: row;
		justify-content: space-between;

		align-self: flex-start;
		gap: 2rem;

		& ${CardWrapper}:nth-child(1) {
			margin-bottom: 3rem;
		}

		& ${CardWrapper}:nth-child(2) {
			margin-bottom: 1.33rem;
		}
	}
`;

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 3rem 0;

	background: url(${bgTopMobile}) top left no-repeat,
		url(${bgBottomMobile}) bottom right no-repeat;

	@media screen and (min-width: ${mediaQuery.desktop}) {
		width: 100vw;
		height: 100vh;
		padding: 6.25rem 9.5rem;

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
