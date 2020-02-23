import React from "react";

import "../css/ProductList.css";
import { Product } from "./Product";

export const ProductList = props => {
	//This will always be a grid with 5 columns and infinite rows
	return (
		<div className="all-products-container">
			{props.products.map((product, i) => (
				<Product
					key={i}
					id={product.id}
					linkToImage={product.linkToImage}
					brand={product.brand}
					name={product.name}
					price={product.price}
				/>
			))}
		</div>
	);
};
