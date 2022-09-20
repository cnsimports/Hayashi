import { Facebook } from '@svg/Facebook';
import { Instagram } from '@svg/Instagram';
import { Twitter } from '@svg/Twitter';

import styles from './Social.module.css';

export const Social = () => (
	<ul className={styles.social}>
		<li>
			<a href="https://www.facebook.com/Hayashiwhisky-106700838648559/" target="_blank" rel="noopener noreferrer">
				<Facebook width={16} fill="var(--c-gold)" />
			</a>
		</li>
		<li>
			<a href="https://twitter.com/HayashiWhisky" target="_blank" rel="noopener noreferrer">
				<Twitter width={16} fill="var(--c-gold)" />
			</a>
		</li>
		<li>
			<a href="https://www.instagram.com/hayashi_whisky/" target="_blank" rel="noopener noreferrer">
				<Instagram width={16} fill="var(--c-gold)" />
			</a>
		</li>
	</ul>
);
