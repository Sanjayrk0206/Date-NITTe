import React from "react";
import {
	BrowserRouter as Router, Route, Switch, Redirect,
} from "react-router-dom";
import { Register } from "./pages/auth/register";
import { Login } from "./pages/auth/login";

const App = () => (
	<Router>
		<Route exact path="/">
			<Redirect to="/login" />
		</Route>
		<Switch>
			<Route exact path="/register" component={Register} />
			<Route exact path="/login" component={Login} />
		</Switch>
	</Router>
);

export default App;
