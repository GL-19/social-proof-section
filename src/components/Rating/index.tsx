import { RatingWrapper } from "./styles";
import star from "../../images/icon-star.svg";

interface RatingProps {
	stars?: number;
	text: string;
}

export function Rating({ stars = 5, text }: RatingProps) {
	return (
		<RatingWrapper>
			<div>
				{[...Array(stars)].map((x, i) => {
					return <img key={i} src={star} alt="star" />;
				})}
			</div>
			<p>{text}</p>
		</RatingWrapper>
	);
}
