import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

import styles from './BlogGrid.module.css';
import { getStrapiMedia } from '@lib/media';

export const BlogGridItem = ({ title, thumbnail, count, slug }) => {
	const padCount = count.toString().padStart(3, '0');
	console.log(thumbnail);
	return (
		<Link href={`/blog/${slug}`} passHref>
			<motion.a
				layout
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className={styles['blog-grid-item']}
			>
				<p>{padCount}</p>
				<div className="img">
					<Image
						priority
						alt={thumbnail.alternativeText}
						src={getStrapiMedia(thumbnail.url)}
						layout="responsive"
						width={600}
						height={656}
					/>
				</div>
				<h4>{title}</h4>
			</motion.a>
		</Link>
	);
};

BlogGridItem.propTypes = {
	title: PropTypes.string.isRequired,
	thumbnail: PropTypes.object,
	count: PropTypes.string,
	slug: PropTypes.string,
};
