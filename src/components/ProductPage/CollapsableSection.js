import React, { useState } from "react";

export const CollapsableSection = props => {
	const [isCollapsed, setisCollapsed] = useState(true);

	const handleCollapse = () => {
		setisCollapsed(!isCollapsed);
	};

	return (
		<div style={props.hasBorder ? { borderBottom: "1px solid black", marginBottom: "7px" } : {}}>
			<div
				className="collapsable-section-header"
				style={{
					display: "flex",
					flexDirection: "row",
					margin: "0px 0px 1rem 0px",
					padding: "3px 3px 3px 0px",
				}}
				onClick={handleCollapse}
			>
				<h2 className="unselectable" style={{ flex: 1, margin: "0", padding: "0" }}>
					{props.sectionName}
				</h2>
				<div style={{ alignSelf: "flex-end", marginRight: "6px" }}>
					<svg
						style={{ transform: isCollapsed ? "rotate(180deg)" : "" }}
						viewBox="0 0 24 24"
						width="24"
						height="24"
						stroke="black"
						strokeWidth="2"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="css-i6dzq1"
					>
						<polyline points="18 15 12 9 6 15"></polyline>
					</svg>
				</div>
			</div>
			<div
				className="collapsable-section-content"
				style={{ display: isCollapsed ? "none" : "block" }}
			>
				{props.children}
			</div>
		</div>
	);
};
