import { Facebook } from '../SVG/Facebook';
import { Instagram } from '../SVG/Instagram';
import { Twitter } from '../SVG/Twitter';

import styles from './Social.module.css';

export const Social = () => (
  <ul className={styles.social}>
    <li>
      <a href="/">
        <Facebook width="16" fill="var(--c-gold)" />
      </a>
    </li>
    <li>
      <a href="/">
        <Twitter width="16" fill="var(--c-gold)" />
      </a>
    </li>
    <li>
      <a href="/">
        <Instagram width="16" fill="var(--c-gold)" />
      </a>
    </li>
  </ul>
);