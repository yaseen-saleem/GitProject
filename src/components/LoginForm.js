import React from 'react';
import {
	useFormik,
	Form,
	useField,
	Field,
	useFormikContext,
	Formik,
} from 'formik';
import { MyTextInput } from './SignupForm';

const validate = (values) => {
	const errors = {};
	if (!values.userName) {
		errors.userName = 'Required';
	} else if (values.userName.length > 15) {
		errors.userName = 'Must be 15 characters or less';
	}

	if (!values.password) {
		errors.password = 'Required';
	} else if (values.password.length > 12) {
		errors.password = 'Must be 12 characters or less';
	}

	return errors;
};
const LoginForm = ({ history }) => {
	// Pass the useFormik() hook initial form values and a submit function that will
	// be called when the form is submitted
	const formik = useFormik({
		initialValues: {
			userName: '',
			password: '',
		},
		validate,
		onSubmit: (values) => {
			if (values.userName === 'yaseen' && values.password === 'trapsoft') {
				history.push('/ContactForm');
			} else {
				console.log('login failure');
			}
		},
	});
	return (
		<Formik>
			<form onSubmit={formik.handleSubmit.bind(this)}>
				<h2 className='signup-tab'>Login Form</h2>
				<label htmlFor='userName'>User Name</label>
				<MyTextInput
					id='userName'
					name='userName'
					type='text'
					onChange={formik.handleChange}
					value={formik.values.userName}
				/>
				{formik.errors.userName ? <div>{formik.errors.userName}</div> : null}
				<label htmlFor='password'>Password</label>
				<MyTextInput
					id='password'
					name='password'
					type='text'
					onChange={formik.handleChange}
					value={formik.values.password}
				/>
				{formik.errors.password ? <div>{formik.errors.password}</div> : null}

				<button type='submit'>Login</button>
			</form>
		</Formik>
	);
};
export default LoginForm;
