import styled from "styled-components";

export const RatingWrapper = styled.section`
	background-color: hsl(300, 24%, 96%);
	border-radius: 10px;

	width: 335px;
	height: 80px;
	padding: 10px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	div {
		display: flex;
		gap: 5px;
	}
	p {
		color: hsl(300, 43%, 22%);
		font-family: "Spartan", sans-serif;
		font-weight: 700;
	}

	@media screen and (min-width: 850px) {
		padding: 10px 40px;

		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		gap: 25px;

		width: 500px;
		height: 50px;
	}
`;
