import React from "react";
import { Link } from "react-router-dom";

export const HeaderLink = props => {
	return (
		<div className="header-link-container">
			<Link to={props.redirectURL} className={"header-link" + " " + props.className}>
				{props.text}
			</Link>
		</div>
	);
};
