import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Header from './common/Header';
import ContactForm from './ContactForm';

function App() {
	return (
		<div className='container-fluid'>
			<Header />
			<Switch>
				<Route
					exact
					path='/'
					render={(p) => {
						return <LoginForm {...p} />;
					}}
				/>
				<Route exact path='/SignupForm' component={SignupForm} />
				<Route exact path='/ContactForm' component={ContactForm} />
			</Switch>
		</div>
	);
}

export default App;
