import styled from "styled-components";

export const RatingWrapper = styled.div`
	background-color: hsl(300, 24%, 96%);

	color: hsl(300, 43%, 22%);
	font-family: "Spartan", sans-serif;
	font-weight: 700;

	display: flex;
	flex-direction: row;
	justify-content: space-around;

	@media screen and (max-width: 750px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}
`;
