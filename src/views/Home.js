import React from "react";

import "../css/Home.css";
import { PromoGrid } from "../components/Home/PromoGrid";

export const Home = () => {
	return (
		<div className="home-container">
			<div className="promo-images-container">
				<PromoGrid />
			</div>
		</div>
	);
};
