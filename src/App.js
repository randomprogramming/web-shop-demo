import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import { Home } from "./views/Home";
import { Navbar } from "./components/Navbar";
import { ShopHeader } from "./components/ShopHeader/ShopHeader";

const App = () => {
	return (
		<div className="App">
			<nav>
				<Navbar />
			</nav>
			<Switch>
				<Route exact path="/">
					<ShopHeader />
					<Home />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
