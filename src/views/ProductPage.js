import React, { useState } from "react";

import "../css/ProductPage.css";
import { ProductFullDescription } from "../components/ProductPage/ProductFullDescription";
import { PurchasePanel } from "../components/ProductPage/PurchasePanel";
import { ImageHolderSmall } from "../components/ProductPage/ImageHolderSmall";

export const ProductPage = () => {
	const [selectedPicture, setSelectedPicture] = useState(2);
	//TODO: Fetch the information about the product when the component mounts
	const [product, setProduct] = useState({
		id: "567311C",
		linksToImages: [
			"https://cdn-katapult.azureedge.net/cdn/products/567311C.jpg?v=1",
			"https://cdn-katapult.azureedge.net/cdn/products/567311C_1.jpg?v=1",
			"https://cdn-katapult.azureedge.net/cdn/products/567311C_3.jpg?v=1",
		],
		brand: "Converse",
		name: 'Chuck Taylor All Star "Love Fearlessly"',
		price: 529,
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		avaliableSizes: [34, 35.5, 38, 42, 44, 46],
	});

	const handleImageButtonClickLeft = () => {
		if (selectedPicture !== 0) {
			setSelectedPicture(selectedPicture - 1);
		} else {
			setSelectedPicture(product.linksToImages.length - 1);
		}
	};

	const handleImageButtonClickRight = () => {
		if (selectedPicture !== product.linksToImages.length - 1) {
			setSelectedPicture(selectedPicture + 1);
		} else {
			setSelectedPicture(0);
		}
	};

	const handleHover = num => {
		setSelectedPicture(num);
	};

	return (
		<div className="product-page-main">
			<div className="product-page-name-container">
				<h1 className="product-name-large">{product.name}</h1>
			</div>
			<div className="product-page-image-large">
				{/* <div className="product-image-left-button product-image-button">
					<svg
						viewBox="0 0 24 24"
						width="84"
						height="84"
						stroke="currentColor"
						strokeWidth="2"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="css-i6dzq1"
						style={{ cursor: "pointer", padding: "5px" }}
						onClick={handleImageButtonClickLeft}
					>
						<polyline points="15 18 9 12 15 6"></polyline>
					</svg>
				</div> */}
				<img
					className="product-image-large unselectable"
					src={product.linksToImages[selectedPicture]}
					alt="product"
				/>
				{/* <div className="product-image-right-button product-image-button">
					<svg
						viewBox="0 0 24 24"
						width="84"
						height="84"
						stroke="currentColor"
						strokeWidth="2"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="css-i6dzq1 unselectable"
						style={{ cursor: "pointer", padding: "5px", transform: "rotate(180deg)" }}
						onClick={handleImageButtonClickRight}
					>
						<polyline points="15 18 9 12 15 6"></polyline>
					</svg>
				</div> */}
			</div>
			<div className="image-selector">
				{product.linksToImages.map((imageLink, counter) => (
					<ImageHolderSmall hoverHandler={e => handleHover(counter)} imageLink={imageLink} />
				))}
			</div>
			<div className="product-full-description">
				{/* Pass in the description of the current product and all the needed stuff here */}
				<ProductFullDescription description={product.description} />
				<PurchasePanel
					brand={product.brand}
					price={product.price}
					avaliableSizes={product.avaliableSizes}
				/>
			</div>
		</div>
	);
};
