import { getStrapiMedia } from '@lib/media';
import Image from 'next/future/image';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './SplitContent.module.css';

export const SplitContent = ({ image, topic, title, content, variant }) => {
	const contentRef = useRef(null)
	const contentWrapperRef = useRef(null)

	useEffect(() => {
		if (contentWrapperRef.current && contentRef.current) {
			const heightDiff = contentRef.current.getBoundingClientRect().bottom - contentWrapperRef.current.getBoundingClientRect().bottom;
			contentWrapperRef.current.style.setProperty('--height-diff', `${heightDiff}px`)
		}
	}, [])

	return (
		<div className={`${styles['split-content']} ${styles[variant.replaceAll('_', '-')]}`}>
			<div ref={contentRef} className={styles.content}>
				<div className={styles['content-wrapper']}>
					<h2 className={`${styles.topic} -uppercase`}>{topic}</h2>
					<ReactMarkdown className={styles.title}>{title}</ReactMarkdown>
					<div ref={contentWrapperRef}>
						<ReactMarkdown className={styles.text}>{content}</ReactMarkdown>
					</div>
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
