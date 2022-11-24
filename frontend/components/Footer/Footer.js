import Link from 'next/link';

import { Logo } from '@svg/Logo';
import { CopySocial } from './CopySocial';

import styles from './Footer.module.css';
import Image from 'next/image';

export const Footer = () => (
	<footer className={`${styles.footer} footer`}>
		<div className="container">
			<div className={styles['foot-nav-container']}>
				<Image
					alt="The Modern Expression Of An Ancient Spirit"
					src='/images/footer-text.svg'
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
							<li>
								<Link href="#">
									<a>24 Yr</a>
								</Link>
							</li>
							<li>
								<Link href="#">
									<a>8 Yr</a>
								</Link>
							</li>
							<li>
								<Link href="#">
									<a>Koyo</a>
								</Link>
							</li>
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
				<>
					{/* eslint-disable */}
						<label>
							Hear more from Hayashi
						</label>
						<script type="text/javascript" src="https://campaigns.zoho.com/js/zc.iframe.js"></script>
						<iframe frameborder="0" id="iframewin" width="100%" height="100%" src="https://hqepw-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecbe47557&zx=12e1ad3ac&tD=1cfb060ce15fe411&sD=1cfb060ce16235e3"></iframe>
					{/* eslint-enable */}
				</>
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
