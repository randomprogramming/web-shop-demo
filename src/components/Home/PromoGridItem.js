import React from "react";
import { Link } from "react-router-dom";

export const PromoGridItem = props => {
	return (
		<div className="image-wrapper">
			<Link to={props.redirectURL}>
				<img className="promo-grid-img" src={props.linkToImage} alt="promo" />
			</Link>
		</div>
	);
};
