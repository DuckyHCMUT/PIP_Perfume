import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const rootElement = document.getElementById('root');

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/" component={Home} />
			<Route path="/user/login" component={Login} />
			<Route path="/user/register" component={Register} />
		</Switch>
	</BrowserRouter>,
	rootElement
);
