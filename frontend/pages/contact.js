import { motion } from 'framer-motion';

import { Button } from '@components/Button/Button';
import { Hero } from '@components/Hero/Hero';
import { heroMotion } from '@components/Hero/Hero.motion';

import styles from '@styles/pages/Contact.module.css';

const Contact = () => {
	return (
		<main>
			<Hero>
				<div className="container -sm -p-m">
					<motion.p variants={heroMotion} initial="hidden" animate="fade" className="h5">
						Contact
					</motion.p>
					<motion.h1 variants={heroMotion} initial="hidden" animate="fade" className="h2">
						How can Hayashi help?
					</motion.h1>
					<motion.p variants={heroMotion} initial="hidden" animate="fade" className="h5">
						The Hayashi brand is growing and our team is always open to new opportunities and partners. Let&apos;s see
						how we can work together, bringing refined Japanese Ryukyu whisky to all those who seek it.
					</motion.p>
				</div>
			</Hero>

			<div className={styles.form}>
				<div className="container -p-m">
					<form>
						<label htmlFor="name">Your name</label>
						<input id="name" type="text" placeholder="Enter your name" />

						<label htmlFor="email">Email address</label>
						<input id="email" type="email" placeholder="Enter email" />

						<label htmlFor="subject">Subject</label>
						<input id="subject" type="text" placeholder="How can we help?" />

						<label htmlFor="message">Message</label>
						<textarea id="message" rows={1} placeholder="Your message here"></textarea>

						<Button type="submit">Send Message</Button>
					</form>
				</div>
			</div>
		</main>
	);
};

export default Contact;
