import { CardWrapper } from "./styles";

interface CardProps {
	name: string;
	review: string;
	photo: string;
}

export function Card({ name, review, photo }: CardProps) {
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
