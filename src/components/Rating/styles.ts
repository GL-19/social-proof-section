import styled from "styled-components";
import { mediaQuery } from "../../styles/GlobalStyle";

export const RatingWrapper = styled.section`
	background-color: hsl(300, 24%, 96%);
	border-radius: 10px;

	width: 21rem;
	height: 5rem;
	padding: 0.625rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	div {
		display: flex;
		gap: 0.3125rem;
	}
	p {
		color: hsl(300, 43%, 22%);
		font-family: "Spartan", sans-serif;
		font-weight: 700;
	}

	@media screen and (min-width: ${mediaQuery.desktop}) {
		padding: 0.625rem 2.5rem;

		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		gap: 2rem;

		width: 31.25rem;
		height: 3.125rem;
	}
`;
