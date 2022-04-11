import { Facebook } from '@svg/Facebook';
import { Twitter } from '@svg/Twitter';
import { useRouter } from 'next/router';

import styles from './SharePost.module.css';

export const SharePost = () => {
  const router = useRouter();
  let fullUrl;
  if (typeof window !== 'undefined') {
    fullUrl = window.location.href;
  }

  return (
    <div className={styles['share-post']}>
      <p className="-serif"><em>Share this post</em></p>
      <ul>
        <li>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${fullUrl}`} target="_blank" rel="noopener noreferrer">
            <Facebook width={16} fill="var(--c-gold)" />
          </a>
        </li>
        <li>
          <a href={`https://twitter.com/intent/tweet?url=${fullUrl}&text=Check out this great article I found!`} target="_blank" rel="noopener noreferrer">
            <Twitter width={16} fill="var(--c-gold)" />
          </a>
        </li>
      </ul>
    </div>
  )
};