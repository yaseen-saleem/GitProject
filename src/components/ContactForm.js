import React from 'react';
import {
	useFormik,
	Form,
	useField,
	Field,
	useFormikContext,
	Formik,
} from 'formik';
import { MyTextInput, validate } from './SignupForm';

const ContactForm = () => {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '', //lastName as ContactAdress
			contactNumber: '',
			email: '',
		},
		validate,
		onSubmit: (values) => {
			console.log(JSON.stringify(values, null, 2));
		},
	});
	return (
		<Formik>
			<form onSubmit={formik.handleSubmit}>
				<h2 className='contact-form-tab'>Contact Form</h2>
				{/* Contact Name Component */}
				<label htmlFor='firstName'>Contact Name</label>
				<MyTextInput
					id='firstName'
					name='firstName'
					type='text'
					onChange={formik.handleChange}
					value={formik.values.firstName}
				/>
				{formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
				{/* Contact Name Component Ends*/}
				{/* Contact Address Component  Start*/}
				<label htmlFor='lastName'>Contact Address</label>
				<MyTextInput
					id='lastName'
					name='lastName'
					type='text'
					onChange={formik.handleChange}
					value={formik.values.lastName}
				/>
				{formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
				{/* Contact Address Component Ends*/}
				{/* Contact Email Component  Start*/}
				<label htmlFor='email'>Email Address</label>
				<MyTextInput
					id='email'
					name='email'
					type='email'
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
				{formik.errors.email ? <div>{formik.errors.email}</div> : null}
				{/* Contact Email Component Ends*/}
				{/* Contact Mobile Number Component  Start*/}
				<label htmlFor='contactNumber'>Contact Number</label>
				<MyTextInput
					id='contactNumber'
					name='contactNumber'
					type='text'
					onChange={formik.handleChange}
					value={formik.values.contactNumber}
				/>
				{formik.errors.contactNumber ? (
					<div>{formik.errors.contactNumber}</div>
				) : null}
				{/* Contact Mobile Number Component Ends*/}
				<button type='submit'>Sign up</button>
			</form>
		</Formik>
	);
};
export default ContactForm;
