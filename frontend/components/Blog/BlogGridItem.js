import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

import styles from './BlogGrid.module.css';
import { getStrapiMedia } from '@lib/media';

export const BlogGridItem = ({ title, thumbnail, count, slug }) => {
	const padCount = count.toString().padStart(3, '0');
	const { url, alternativeText } = thumbnail.data.attributes;

	return (
		<Link href={`/blog/${slug}`}>
			<a className={styles['blog-grid-item']}>
				<p>{padCount}</p>
				<div className="img">
					<Image
						alt={alternativeText}
						src={getStrapiMedia(url)}
						layout="responsive"
						width={600}
						height={656}
					/>
				</div>
				<h4>{title}</h4>
			</a>
		</Link>
	);
};

BlogGridItem.propTypes = {
	count: PropTypes.string,
};
