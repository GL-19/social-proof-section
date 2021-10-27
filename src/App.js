import { Rating, Card } from "./components";
import {} from "./styles/styles";
import Colton from "./images/image-colton.jpg";
import Irene from "./images/image-irene.jpg";
import Anne from "./images/image-anne.jpg";

function App() {
	return (
		<main>
			<h1>10,000+ of our users love our products.</h1>
			<p>
				We only provide great products combined with excellent customer service. See what our
				satisfied customers are saying about our services.
			</p>
			<Rating text="Rated 5 Stars in Reviews" />
			<Rating text="Rated 5 Stars in Report Guru" />
			<Rating text="Rated 5 Stars in BestTech" />

			<Card
				name="Colton Smith"
				photo={Colton}
				review='"We needed the same printed design as the one we had ordered a week prior.
      Not only did they find the original order, but we also received it in time.
      Excellent!"'
			/>
			<Card
				name="Irene Roberts "
				photo={Irene}
				review=' "Customer service is always excellent and very quick turn around. Completely
      delighted with the simplicity of the purchase and the speed of delivery."'
			/>
			<Card
				name="Anne Wallace "
				photo={Anne}
				review=' "Put an order with this company and can only praise them for the very high
      standard. Will definitely use them again and recommend them to everyone!"'
			/>
		</main>
	);
}

export default App;
