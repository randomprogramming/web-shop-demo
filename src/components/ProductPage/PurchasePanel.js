import React, { useState } from "react";

export const PurchasePanel = ({ brand, price, avaliableSizes }) => {
	const [selectedSize, setSelectedSize] = useState(0);
	const [selectedStandard, setSelectedStandard] = useState("EU");

	const handleClickOnStandard = standard => {
		// TODO: Update global state instead of just in this component
		// This gets called when the user selects some size standard of product
		setSelectedStandard(standard);
	};

	const handleClickOnSize = size => {
		// TODO: Update global state instead of just in this component
		// This gets called when the user selects some size of product
		setSelectedSize(size);
	};
	return (
		<div className="product-purchase-panel">
			{/* TODO: Use logo image instead of text here */}
			<div className="product-brand-and-price">
				<div className="product-brand-large-container">{brand}</div>
				<div className="product-price-large-container">
					<strong>{price.toFixed(2)} HRK</strong>
				</div>
			</div>
			<div className="product-size-select small-margin-top">
				<div className="sizes-standars-container">
					<h1 className="size-header-text">Standard veličine:</h1>
					<ul className="size-standards-list">
						<li
							className="product-size"
							onClick={e => handleClickOnStandard("EU")}
							style={selectedStandard === "EU" ? { backgroundColor: "#f4e802" } : {}}
						>
							EU
						</li>
						<li
							className="product-size"
							onClick={e => handleClickOnStandard("US")}
							style={selectedStandard === "US" ? { backgroundColor: "#f4e802" } : {}}
						>
							US
						</li>
						<li
							className="product-size"
							onClick={e => handleClickOnStandard("UK")}
							style={selectedStandard === "UK" ? { backgroundColor: "#f4e802" } : {}}
						>
							UK
						</li>
					</ul>
				</div>
				<div className="number-sizes-container small-margin-top">
					<h1 className="size-header-text">Veličina:</h1>
					<ul className="avaliable-sizes-list">
						{avaliableSizes.map(size => {
							return (
								<li
									key={size}
									className="product-size"
									onClick={e => handleClickOnSize(size)}
									style={selectedSize === size ? { backgroundColor: "#f4e802" } : {}}
								>
									<span className="unselectable">{size}</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<div className="add-to-cart small-margin-top">
				<button className="add-to-cart-button">Dodaj u košaricu</button>
			</div>
		</div>
	);
};
