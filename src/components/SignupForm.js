import React from 'react';
import {
	useFormik,
	Form,
	useField,
	Field,
	useFormikContext,
	Formik,
} from 'formik';
import Header from './common/Header';
function Checkbox({ id, name, className }) {
	return (
		<>
			<Field
				name={name}
				render={({ field, form }) => {
					return (
						<input
							type='checkbox'
							id={id}
							className={className}
							checked={field.value}
							{...field}
						/>
					);
				}}
			/>
		</>
	);
}
// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const MyTextInput = ({ label, ...props }) => {
	// useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
	// which we can spread on <input> and alse replace ErrorMessage entirely.
	const [field, meta] = useField(props);
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input className='text-input' {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className='error'>{meta.error}</div>
			) : null}
		</>
	);
};

const validate = (values) => {
	const errors = {};
	if (!values.firstName) {
		errors.firstName = 'Required';
	} else if (values.firstName.length > 15) {
		errors.firstName = 'Must be 15 characters or less';
	}

	if (!values.lastName) {
		errors.lastName = 'Required';
	} else if (values.lastName.length > 20) {
		errors.lastName = 'Must be 20 characters or less';
	}

	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}

	return errors;
};

const SignupForm = () => {
	// Pass the useFormik() hook initial form values and a submit function that will
	// be called when the form is submitted

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
		},
		validate,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<Formik>
			<form onSubmit={formik.handleSubmit}>
				<h1>Signup Form</h1>
				<label htmlFor='firstName'>First Name</label>
				<MyTextInput
					id='firstName'
					name='firstName'
					type='text'
					onChange={formik.handleChange}
					value={formik.values.firstName}
				/>
				{formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
				<label htmlFor='lastName'>Last Name</label>
				<MyTextInput
					id='lastName'
					name='lastName'
					type='text'
					onChange={formik.handleChange}
					value={formik.values.lastName}
				/>
				{formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
				<label htmlFor='email'>Email Address</label>
				<MyTextInput
					id='email'
					name='email'
					type='email'
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
				{formik.errors.email ? <div>{formik.errors.email}</div> : null}
				<label>
					<Checkbox />
					Accept The Terms
				</label>
				<button type='submit'>Sign up</button>
			</form>
		</Formik>
	);
};
export default SignupForm;
