import styled from "styled-components";

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (max-width: 850px) {
		padding: 50px 0;
	}
`;

export const TextWrapper = styled.section`
	padding: 0 20px;
	margin: 20px 0;

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
`;

export const RatingsWrapper = styled.section`
	@media screen and (max-width: 850px) {
		display: flex;
		flex-direction: column;
		align-items: center;

		margin: 20px 0;
		gap: 15px;
	}
`;

export const CardsWrapper = styled.section`
	@media screen and (max-width: 850px) {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		gap: 15px;
		margin: 30px 0;
	}
`;
