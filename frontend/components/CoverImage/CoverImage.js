import { getStrapiMedia } from '@lib/media';
import Image from 'next/image';
import PropTypes from 'prop-types';

import styles from './CoverImage.module.css';

export const CoverImage = ({ CoverImage }) => {
	const { alternativeText, url, mime } = CoverImage.data.attributes;
	return (
		<div className={styles['cover-image']}>
			{mime.includes('video') ? (
				<video muted={true} controls={false} autoPlay={true} loop={true}>
					<source src={getStrapiMedia(url)} />
				</video>
			) : (
				<Image priority alt={alternativeText} src={getStrapiMedia(url)} layout="fill" />
			)}
		</div>
	);
};

CoverImage.propTypes = {
	alternativeText: PropTypes.string,
	CoverImage: PropTypes.shape({
		data: PropTypes.shape({
			attributes: PropTypes.shape({
				mime: PropTypes.string,
				alternativeText: PropTypes.string,
				url: PropTypes.string.isRequired,
			}),
		}),
	}).isRequired,
};
