import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import SignupForm from './components/SignupForm';
import './styles.css';
import LoginForm from './components/LoginForm';
import Header from './components/common/Header';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
	<Router>
		<App />
	</Router>,

	document.getElementById('root')
);
