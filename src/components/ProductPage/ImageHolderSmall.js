import React from "react";

export const ImageHolderSmall = props => {
	return (
		<div>
			<img
				src={props.imageLink}
				style={{ height: "75px", width: "auto", marginRight: "1rem", cursor: "pointer" }}
				alt="small product"
				onMouseEnter={props.hoverHandler}
			/>
		</div>
	);
};
