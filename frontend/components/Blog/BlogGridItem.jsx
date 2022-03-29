import Image from 'next/image';
import Link from 'next/link';

import styles from './BlogGrid.module.css';

export const BlogGridItem = ({ count = '1' }) => {
  const padCount = count.toString().padStart(3, '0');

  return(
    <Link href="/">
      <a className={styles['blog-grid-item']}>
        <p>{padCount}</p>
        <div className="img">
          <Image alt="" src="https://source.unsplash.com/collection/928423/480x480" layout="responsive" width={600} height={656} />
        </div>
        <h4>Donec ullamcorper nulla non metus auctor fringilla.</h4>
      </a>
    </Link>
  )
};