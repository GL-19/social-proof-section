import { RatingWrapper } from "./styles";
import star from "../../images/icon-star.svg";

export function Rating({ stars = 5, text }) {
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
