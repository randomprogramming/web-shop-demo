import React from "react";
import { CollapsableSection } from "./CollapsableSection";

export const ProductFullDescription = ({ description }) => {
	return (
		<div className="product-description-container">
			{/*TODO:  Make it only so that 1 section can be visible, the rest are collapsed */}
			<CollapsableSection hasBorder sectionName="Opis proizvoda">
				<p className="description-paragraph">{description}</p>
				<ul className="description-list-items">
					<li>Lorem: Ipsum</li>
					<li>Lorem: Ipsum</li>
					<li>Lorem: Ipsum</li>
				</ul>
			</CollapsableSection>
			<CollapsableSection hasBorder sectionName="Isporuka"></CollapsableSection>
			<CollapsableSection sectionName="Kontakt"></CollapsableSection>
		</div>
	);
};
