import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Header from './common/Header';

function App() {
	return (
		<div className='container-fluid'>
			<Header />
			<Switch>
				<Route exact path='/' component={LoginForm} />
				<Route path='/' component={SignupForm} />
			</Switch>
		</div>
	);
}

export default App;
