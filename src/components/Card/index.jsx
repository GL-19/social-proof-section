import { CardWrapper, Name, Title } from "./styles";

export function Card({ name, review, photo }) {
	return (
		<CardWrapper>
			<div>
				<img src={photo} alt={name} />
				<p>{name}</p>
				<span>Verified Buyer</span>
			</div>
			<p>{review}</p>
		</CardWrapper>
	);
}
