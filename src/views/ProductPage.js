import React, { useState } from "react";

import "../css/ProductPage.css";

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
	});
	return (
		<div className="product-page-main">
			<div className="product-page-name-container">
				<h1 className="product-name-large">{product.name}</h1>
			</div>
			<div className="product-page-image-large">
				<img className="product-image-large" src={product.linksToImages[1]} alt="product" />
			</div>
		</div>
	);
};
