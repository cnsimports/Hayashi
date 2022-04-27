import { gql } from '@apollo/client';
import PropTypes from 'prop-types';

import client from '@lib/apollo';

import { Button } from '@components/Button/Button';
import { Hero } from '@components/Hero/Hero';

import styles from '@styles/pages/Contact.module.css';

const Contact = ({ hero }) => {
	return (
		<main>
			{hero && <Hero HeroTopLine={hero?.HeroTopLine} HeroMain={hero?.HeroMain} HeroBottomLine={hero?.HeroBottomLine} />}

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

Contact.propTypes = {
	hero: PropTypes.object,
};

export async function getStaticProps() {
	const { data: contactRes } = await client.query({
		query: gql`
			query {
				contact {
					data {
						attributes {
							Hero {
								HeroTopLine
								HeroMain
								HeroBottomLine
							}
						}
					}
				}
			}
		`,
	});

	return {
		props: {
			hero: contactRes.contact.data.attributes.Hero,
		},
		revalidate: 10,
	};
}

export default Contact;
