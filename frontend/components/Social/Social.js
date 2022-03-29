import { Facebook } from '@svg/Facebook';
import { Instagram } from '@svg/Instagram';
import { Twitter } from '@svg/Twitter';

import styles from './Social.module.css';

export const Social = () => (
	<ul className={styles.social}>
		<li>
			<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
				<Facebook width={16} fill="var(--c-gold)" />
			</a>
		</li>
		<li>
			<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
				<Twitter width={16} fill="var(--c-gold)" />
			</a>
		</li>
		<li>
			<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
				<Instagram width={16} fill="var(--c-gold)" />
			</a>
		</li>
	</ul>
);
