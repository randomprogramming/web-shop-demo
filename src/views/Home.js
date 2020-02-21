import React from "react";

import "../css/Home.css";
import { PromoGrid } from "../components/Home/PromoGrid";
import { ProductList } from "../components/ProductList";

export const Home = () => {
	//Fetch this list from the server
	const HOME_PRODUCT_LIST = [
		{
			id: "567311C",
			linkToImage: "https://cdn-katapult.azureedge.net/cdn/products/567311C_380x380.jpg?v=1",
			brand: "Converse",
			name: 'Chuck Taylor All Star "Love Fearlessly"',
			price: 529,
		},
		{
			id: "567311C",
			linkToImage: "https://cdn-katapult.azureedge.net/cdn/products/567311C_380x380.jpg?v=1",
			brand: "Converse",
			name: 'Chuck Taylor All Star "Love Fearlessly"',
			price: 529,
		},
		{
			id: "567311C",
			linkToImage: "https://cdn-katapult.azureedge.net/cdn/products/567311C_380x380.jpg?v=1",
			brand: "Converse",
			name: 'Chuck Taylor All Star "Love Fearlessly"',
			price: 529,
		},
		{
			id: "567311C",
			linkToImage: "https://cdn-katapult.azureedge.net/cdn/products/567311C_380x380.jpg?v=1",
			brand: "Converse",
			name: 'Chuck Taylor All Star "Love Fearlessly"',
			price: 529,
		},
		{
			id: "567311C",
			linkToImage: "https://cdn-katapult.azureedge.net/cdn/products/567311C_380x380.jpg?v=1",
			brand: "Converse",
			name: 'Chuck Taylor All Star "Love Fearlessly"',
			price: 529,
		},
		{
			id: "567311C",
			linkToImage: "https://cdn-katapult.azureedge.net/cdn/products/567311C_380x380.jpg?v=1",
			brand: "Converse",
			name: 'Chuck Taylor All Star "Love Fearlessly"',
			price: 529,
		},
		{
			id: "567311C",
			linkToImage: "https://cdn-katapult.azureedge.net/cdn/products/567311C_380x380.jpg?v=1",
			brand: "Converse",
			name: 'Chuck Taylor All Star "Love Fearlessly"',
			price: 529,
		},
		{
			id: "567311C",
			linkToImage: "https://cdn-katapult.azureedge.net/cdn/products/567311C_380x380.jpg?v=1",
			brand: "Converse",
			name: 'Chuck Taylor All Star "Love Fearlessly"',
			price: 529,
		},
		{
			id: "567311C",
			linkToImage: "https://cdn-katapult.azureedge.net/cdn/products/567311C_380x380.jpg?v=1",
			brand: "Converse",
			name: 'Chuck Taylor All Star "Love Fearlessly"',
			price: 529,
		},
		{
			id: "567311C",
			linkToImage: "https://cdn-katapult.azureedge.net/cdn/products/567311C_380x380.jpg?v=1",
			brand: "Converse",
			name: 'Chuck Taylor All Star "Love Fearlessly"',
			price: 7529,
		},
		{
			id: "567311C",
			linkToImage: "https://cdn-katapult.azureedge.net/cdn/products/567311C_380x380.jpg?v=1",
			brand: "Converse",
			name: 'Chuck Taylor All Star "Love Fearlessly"',
			price: 529,
		},
	];
	return (
		<div className="home-container">
			<div className="promo-images-container">
				<PromoGrid />
			</div>
			<div className="featured-items-container">
				<ProductList products={HOME_PRODUCT_LIST} />
			</div>
		</div>
	);
};
