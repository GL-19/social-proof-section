import styled from "styled-components";

export const CardWrapper = styled.section`
	padding: 2rem 1.5rem;
	width: 21rem;
	height: 15rem;

	display: flex;
	flex-direction: column;
	justify-content: space-around;

	background-color: hsl(300, 43%, 22%);
	border-radius: 10px;

	color: hsl(0, 0%, 100%);
	font-family: "Spartan", sans-serif;
	font-size: 0.875rem;

	div {
		display: grid;
		grid-template-columns: 2.5rem auto;
		grid-template-rows: 1fr 1fr;
		grid-template-areas:
			"photo name"
			"photo description";
		align-items: center;
		column-gap: 1.5rem;

		img {
			width: 2.8rem;
			height: 2.8rem;

			border-radius: 50%;
			grid-area: photo;
		}

		p {
			font-weight: 700;
			grid-area: name;
		}

		span {
			color: hsl(333, 80%, 67%);
			grid-area: description;
		}
	}
`;
