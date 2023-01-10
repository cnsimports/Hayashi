import Link from 'next/link';

import { Logo } from '@svg/Logo';
import { CopySocial } from './CopySocial';

import styles from './Footer.module.css';
import Image from 'next/image';

import PropTypes from 'prop-types';

export const Footer = ({ products }) => (
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
				<form className={styles['subscribe-form']} action="https://hayashiwhisky.us11.list-manage.com/subscribe/post?u=6f22322ce2a7148fef6f15f36&amp;id=df4c0a42d1&amp;f_id=0077aae0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
					<label className={styles['subscribe-title']}>Hear more from Hayashi</label>
					<input className={styles['subscribe-input']} placeholder="Enter e-mail" type="email" name="EMAIL" id="mce-EMAIL" required />
					<div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_6f22322ce2a7148fef6f15f36_df4c0a42d1" tabIndex="-1" /></div>
					<button className={styles['subscribe-button']} type="submit" name="subscribe"></button>
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

Footer.propTypes = {
	products: PropTypes.array,
};
