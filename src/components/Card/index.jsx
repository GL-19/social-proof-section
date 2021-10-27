import {} from "./styles";

export function Card({ name, review, photo }) {
	return (
		<div>
			<img src={photo} alt={name} />
			<p>{name}</p>
			<p>Verified Buyer</p>
			<p>{review}</p>
		</div>
	);
}
