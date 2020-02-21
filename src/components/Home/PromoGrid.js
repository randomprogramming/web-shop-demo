import React from "react";

import { PromoGridItem } from "./PromoGridItem";

export const PromoGrid = () => {
	// Data in this array should be fetched from the server.
	const PROMO_BOXES = [
		{
			linkToImage:
				"https://cdn-katapult.azureedge.net/cdn/shooster-cro---1180-x-550---1-1_small_200215115047_1180x550.jpg",
			redirectURL: "/test",
		},
		{
			linkToImage:
				"https://cdn-katapult.azureedge.net/cdn/rs_x3_puzzle_12_585x710_200218103011_585x710.jpg",
			redirectURL: "/test",
		},
		{
			linkToImage:
				"https://cdn-katapult.azureedge.net/cdn/rs_x3_puzzle_12_585x710_200218103011_585x710.jpg",
			redirectURL: "/test",
		},
		{
			linkToImage:
				"https://cdn-katapult.azureedge.net/cdn/rs_x3_puzzle_12_585x710_200218103011_585x710.jpg",
			redirectURL: "/test",
		},
		{
			linkToImage:
				"https://cdn-katapult.azureedge.net/cdn/rs_x3_puzzle_12_585x710_200218103011_585x710.jpg",
			redirectURL: "/test",
		},
	];
	return (
		<div className="parent-grid">
			{PROMO_BOXES.map(promoBox => (
				<PromoGridItem linkToImage={promoBox.linkToImage} redirectURL={promoBox.redirectURL} />
			))}
		</div>
	);
};
