import styled from "styled-components";

export const CardWrapper = styled.div`
	padding: 30px 25px;
	width: 335px;
	height: 240px;

	display: flex;
	flex-direction: column;
	justify-content: space-around;

	background-color: hsl(300, 43%, 22%);
	border-radius: 10px;

	color: hsl(0, 0%, 100%);
	font-family: "Spartan", sans-serif;
	font-size: 14px;

	div {
		display: grid;
		grid-template-columns: 40px auto;
		grid-template-rows: 1fr 1fr;
		grid-template-areas:
			"photo name"
			"photo description";
		align-items: center;
		column-gap: 25px;

		img {
			width: 45px;
			height: 45px;

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
