import { useForm } from "react-hook-form";

import { Button } from '@components/Button/Button';

import styles from '@styles/pages/Contact.module.css';

export const ContactForm = ({ Recipient }) => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);

	return (
		<div className={styles.form}>
			<div className="container -p-m">
				<form onSubmit={handleSubmit(onSubmit)}>
					<label htmlFor="name">Your name</label>
					<input id="name" type="text" placeholder="Enter your name" {...register('name', { required: true })} />
					{errors.name && <span>This field is required</span>}

					<label htmlFor="email">Email address</label>
					<input id="email" type="email" placeholder="Enter email" {...register('email', { required: true })} />
					{errors.email && <span>This field is required</span>}

					<label htmlFor="subject">Subject</label>
					<input id="subject" type="text" placeholder="How can we help?" {...register('subject', { required: true })} />
					{errors.subject && <span>This field is required</span>}

					<label htmlFor="message">Message</label>
					<textarea id="message" rows={1} placeholder="Your message here" {...register('message', { required: true })}></textarea>
					{errors.message && <span>This field is required</span>}

					<Button type="submit">Send Message</Button>
				</form>
			</div>
		</div>
	)
}