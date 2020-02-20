import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import { Home } from "./views/Home";
import { Navbar } from "./components/Navbar";

const App = () => {
	return (
		<div className="App">
			<nav>
				<Navbar />
			</nav>
			<Switch>
				<Route exact link="/" component={Home} />
			</Switch>
		</div>
	);
};

export default App;
