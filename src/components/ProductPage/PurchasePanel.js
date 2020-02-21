import React from "react";

export const PurchasePanel = ({ brand, price }) => {
	return (
		<div className="product-purchase-panel">
			{/* TODO: Use logo image instead of text here */}
			<div className="product-brand-and-price">
				<div className="product-brand-large-container">{brand}</div>
				<div className="product-price-large-container">
					<strong>{price.toFixed(2)} HRK</strong>
				</div>
			</div>
		</div>
	);
};
