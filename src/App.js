import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import { Home } from "./views/Home";
import { Navbar } from "./components/Navbar";
import { ShopHeader } from "./components/ShopHeader/ShopHeader";
import { ProductPage } from "./views/ProductPage";

const App = () => {
	return (
		<div className="App">
			<nav>
				<Navbar />
				<ShopHeader />
			</nav>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/artikl/:productId">
					<ProductPage />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
