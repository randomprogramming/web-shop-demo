import React from "react";

import "../../css/ShopHeader.css";
import { HeaderLink } from "./HeaderLink";

export const ShopHeader = () => {
	return (
		<div className="shop-header">
			<HeaderLink text="Ženska obuća" className="header-text" />
			<HeaderLink text="Muška obuća" className="header-text" />
			<HeaderLink text="Dječja obuća" className="header-text" />
			<HeaderLink text="Odjeća" className="header-text" />
			<HeaderLink text="Kape" className="header-text" />
			<HeaderLink text="Sale %" className="header-sale-text" />
		</div>
	);
};
