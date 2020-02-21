import React from "react";
import { Link } from "react-router-dom";

export const PromoGrid = () => {
	return (
		<div className="parent-grid">
			<div className="image-wrapper">
				<Link>
					<img
						className="promo-grid-img"
						src="https://cdn-katapult.azureedge.net/cdn/shooster-cro---1180-x-550---1-1_small_200215115047_1180x550.jpg"
						alt="promo"
					/>
				</Link>
			</div>
			<div className="image-wrapper">
				<Link>
					<img
						className="promo-grid-img"
						src="https://cdn-katapult.azureedge.net/cdn/rs_x3_puzzle_12_585x710_200218103011_585x710.jpg"
						alt="promo"
					/>
				</Link>
			</div>
			<div className="image-wrapper">
				<Link>
					<img
						className="promo-grid-img"
						src="https://cdn-katapult.azureedge.net/cdn/rs_x3_puzzle_12_585x710_200218103011_585x710.jpg"
						alt="promo"
					/>
				</Link>
			</div>
			<div className="image-wrapper">
				<Link>
					<img
						className="promo-grid-img"
						src="https://cdn-katapult.azureedge.net/cdn/rs_x3_puzzle_12_585x710_200218103011_585x710.jpg"
						alt="promo"
					/>
				</Link>
			</div>
			<div className="image-wrapper">
				<Link>
					<img
						className="promo-grid-img"
						src="https://cdn-katapult.azureedge.net/cdn/rs_x3_puzzle_12_585x710_200218103011_585x710.jpg"
						alt="promo"
					/>
				</Link>
			</div>
		</div>
	);
};
