import { getStrapiMedia } from '@lib/media';
import Image from 'next/future/image';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import styles from './SplitContent.module.css';

export const SplitContent = ({ image, topic, title, content, variant }) => {
	console.log(styles);
	return (
		<div className={`${styles['split-content']} ${styles[variant.replaceAll('_', '-')]}`}>
			<div className={styles.content}>
				<div className={styles['content-wrapper']}>
					<h2 className={`${styles.topic} -uppercase`}>{topic}</h2>
					<ReactMarkdown className={styles.title}>{title}</ReactMarkdown>
					<ReactMarkdown className={styles.text}>{content}</ReactMarkdown>
				</div>
			</div>
			<Image
				className={styles.image}
				alt={image.data.attributes.alternativeText}
				src={getStrapiMedia(image.data.attributes.url)}
				width={872}
				height={609}
			/>
		</div>
	);
};

SplitContent.propTypes = {
	topic: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	image: PropTypes.object,
};
