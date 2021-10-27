import styled from "styled-components";

export const RatingWrapper = styled.div`
	background-color: hsl(300, 24%, 96%);
	border-radius: 10px;

	display: flex;
	flex-direction: row;
	justify-content: space-around;

	p {
		color: hsl(300, 43%, 22%);
		font-family: "Spartan", sans-serif;
		font-weight: 700;
	}

	@media screen and (max-width: 850px) {
		width: 335px;
		height: 80px;
		padding: 10px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}
`;
