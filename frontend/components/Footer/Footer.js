import Link from 'next/link';

import { Logo } from '@svg/Logo';
import { CopySocial } from './CopySocial';

import styles from './Footer.module.css';
import Image from 'next/image';

import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

const sendData = (data) => {
	return fetch('/api/mailchimp', {
		method: 'POST',
		body: data,
	});
};

const statusMessages = {
	success: "Thanks for subscribing!",
	error: "We couldn't subscribe you. Please try again later."
}

export const Footer = ({ products }) => {
	const formRef = useRef(null);
	const [status, setStatus] = useState(null);
	const handleSubmit = (event) => {
		(async () => {
			try {
				const formData = new FormData(formRef.current);
				const response = await (await sendData(formData)).json();
				setStatus(response.status);
				if (response.status === 'success') formRef.current.reset();
			} catch {
				setStatus('error');
			} finally {
				setTimeout(() => {
					setStatus(null);
				}, 5000);
			}
		})();
		event.preventDefault();
	};

	return (
		<footer className={`${styles.footer} footer`}>
			<div className="container">
				<div className={styles['foot-nav-container']}>
					<Image
						alt="The Modern Expression Of An Ancient Spirit"
						src="/images/footer-text.svg"
						width={316}
						height={52}
						className={styles['foot-img']}
					/>
					<ul className={styles['foot-nav']}>
						<li>
							<Link href="/whisky">
								<a>Hayashi Products</a>
							</Link>
							<ul className={styles['foot-subnav']}>
								{products.map((product, index) => (
									<li key={`product-${index}`}>
										<Link href={`/whisky#${product.attributes.ProductName.replaceAll(' ', '-').toLowerCase()}`}>
											<a>{product.attributes.ProductName}</a>
										</Link>
									</li>
								))}
							</ul>
						</li>
						<li>
							<Link href="#">
								<a>Our Story</a>
							</Link>
						</li>
						<li>
							<Link href="/craft">
								<a>Our Craft</a>
							</Link>
						</li>
						<li>
							<Link href="/blog">
								<a>Blog</a>
							</Link>
						</li>
						<li>
							<Link href="/contact">
								<a>Contact</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className={styles.subscribe}>
					<form
						ref={formRef}
						className={styles['subscribe-form']}
						action="/api/mailchimp"
						method="post"
						target="_blank"
						onSubmit={handleSubmit}
					>
						<label className={styles['subscribe-title']}>Hear more from Hayashi</label>
						<input
							className={styles['subscribe-input']}
							placeholder="Enter e-mail"
							type="email"
							name="email"
							required
						/>
						<button className={styles['subscribe-button']} type="submit" name="subscribe"></button>
						{status && <div className={styles['subscribe-message']}>
							{statusMessages[status]}
						</div>}
					</form>
				</div>
				<div className={styles['foot-group']}>
					<Logo width={85} height={15} />
					<div className={styles['copy-social']}>
						<CopySocial />
					</div>
				</div>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	products: PropTypes.array,
};
