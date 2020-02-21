import React from "react";
import { NavLink } from "react-router-dom";

import "../css/Navbar.css";

export const Navbar = () => {
	return (
		<div className="navbar-container">
			<div className="content-holder">
				<div className="logo-container">Logo</div>
				<div className="nav-link-container">
					<NavLink to="/test" className="nav-link">
						O nama
					</NavLink>
					<NavLink to="/test" className="nav-link">
						Novosti
					</NavLink>
					<NavLink to="/test" className="nav-link">
						Trgovine
					</NavLink>
					<NavLink to="/test" className="nav-link">
						Brandovi
					</NavLink>
					<NavLink to="/test" className="nav-link">
						Lifestyle
					</NavLink>
				</div>
				<div className="account-controls-container">
					Link
					<span className="cart-container"> Link</span>
				</div>
				<div className="media-links">
					<ul>
						<li className="media-links-text media">Media links here:</li>
						<li className="media">Media1</li>
						<li className="media">Media2</li>
						<li className="media">Media3</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
