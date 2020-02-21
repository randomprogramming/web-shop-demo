import React from "react";
import { Link } from "react-router-dom";

import "../css/Product.css";

export const Product = ({ id, linkToImage, brand, name, price }) => {
	return (
		<article className="main-product-container">
			<div className="product-image-container">
				<Link to="/test">
					<div className="product-image-padding">
						<img className="product-image" src={linkToImage} alt="product" />
					</div>
				</Link>
			</div>
			<div className="product-description-container">
				<div className="product-brand">
					<strong>{brand}</strong>
				</div>
				<div className="product-name">{name}</div>
				<div className="product-price-and-colors">
					<div className="product-color-container">
						<ul className="">
							<il className="product-color color-red"></il>
						</ul>
					</div>
					<div className="product-price-container">
						<strong className="product-price">{price.toFixed(2)} HRK</strong>
					</div>
				</div>
			</div>
		</article>
	);
};
