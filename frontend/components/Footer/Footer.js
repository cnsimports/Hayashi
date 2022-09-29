import Link from 'next/link';

import { Logo } from '@svg/Logo';
import { CopySocial } from './CopySocial';

import styles from './Footer.module.css';

export const Footer = () => (
	<footer className={`${styles.footer} footer`}>
		<div className="container">
			<ul className={styles['foot-nav']}>
				<li>
					<Link href="/whisky">
						<a>Ryukyu Whisky</a>
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

			<Logo width={85} height={15} />

			<div className={styles['copy-social']}>
				<CopySocial />
			</div>
		</div>
	</footer>
);
