import React from "react";

import "../../css/ShopHeader.css";
import { HeaderLink } from "./HeaderLink";

export const ShopHeader = () => {
	return (
		<div className="shop-header">
			<HeaderLink text="Ženska obuća" redirectURL="/test" className="header-text" />
			<HeaderLink text="Muška obuća" redirectURL="/test" className="header-text" />
			<HeaderLink text="Dječja obuća" redirectURL="/test" className="header-text" />
			<HeaderLink text="Odjeća" redirectURL="/test" className="header-text" />
			<HeaderLink text="Kape" redirectURL="/test" className="header-text" />
			<HeaderLink text="Sale %" redirectURL="/test" className="header-sale-text" />
		</div>
	);
};
