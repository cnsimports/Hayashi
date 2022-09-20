import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { Button } from '@components/Button/Button';

import styles from '@styles/pages/Contact.module.css';
import { useState } from 'react';

export const ContactForm = () => {
	const [resetForm, setResetForm] = useState(false);
	const [isSending, setIsSending] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = async (data) => {
		setIsSending(true);
		const res = await fetch('/api/sendgrid', {
			body: JSON.stringify({
				email: data.email,
				name: data.name,
				subject: data.subject,
				message: data.message,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		});

		const { error } = await res.json();
		if (error) {
			console.log(error);
			return;
		}

		setResetForm(true);
	};

	return (
		<div className={styles.form}>
			<div className="container -p-m">
				{!resetForm ? (
					<form onSubmit={handleSubmit(onSubmit)}>
						<label htmlFor="name">Your name</label>
						<input id="name" type="text" placeholder="Enter your name" {...register('name', { required: true })} />
						{errors.name && <span>This field is required</span>}

						<label htmlFor="email">Email address</label>
						<input id="email" type="email" placeholder="Enter email" {...register('email', { required: true })} />
						{errors.email && <span>This field is required</span>}

						<label htmlFor="subject">Subject</label>
						<input
							id="subject"
							type="text"
							placeholder="How can we help?"
							{...register('subject', { required: true })}
						/>
						{errors.subject && <span>This field is required</span>}

						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							rows={1}
							placeholder="Your message here"
							{...register('message', { required: true })}
						></textarea>
						{errors.message && <span>This field is required</span>}

						<Button type="submit" disabled={isSending}>
							{isSending ? 'Sending...' : 'Send Message'}
						</Button>
					</form>
				) : (
					<h2>Your form was submitted successfully, thank you!</h2>
				)}
			</div>
		</div>
	);
};

ContactForm.propTypes = {
	Recipient: PropTypes.string,
};
