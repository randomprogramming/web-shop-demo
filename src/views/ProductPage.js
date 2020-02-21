import React, { useState } from "react";

import "../css/ProductPage.css";
import { ProductFullDescription } from "../components/ProductPage/ProductFullDescription";

export const ProductPage = () => {
	//Fetch the information about the product when the component mounts
	const [product, setProduct] = useState({
		id: "567311C",
		linksToImages: [
			"https://cdn-katapult.azureedge.net/cdn/products/567311C_380x380.jpg?v=1",
			"https://cdn-katapult.azureedge.net/cdn/products/567311C_1.jpg?v=1",
			"https://cdn-katapult.azureedge.net/cdn/products/567311C_3.jpg?v=1",
		],
		brand: "Converse",
		name: 'Chuck Taylor All Star "Love Fearlessly"',
		price: 529,
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	});
	return (
		<div className="product-page-main">
			<div className="product-page-name-container">
				<h1 className="product-name-large">{product.name}</h1>
			</div>
			<div className="product-page-image-large">
				<img className="product-image-large" src={product.linksToImages[1]} alt="product" />
			</div>
			<div className="product-full-description">
				{/* Pass in the description of the current product and all the needed stuff here */}
				<ProductFullDescription description={product.description} />
				<div className="product-purchase-panel"> right</div>
			</div>
		</div>
	);
};
