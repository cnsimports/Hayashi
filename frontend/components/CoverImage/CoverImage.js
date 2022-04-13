import { getStrapiMedia } from '@lib/media';
import Image from 'next/image';
import PropTypes from 'prop-types';

import styles from './CoverImage.module.css';

export const CoverImage = ({ CoverImage }) => {
	return (
		<div className={styles['cover-image']}>
			<Image
				priority
				alt={CoverImage.data.attributes.alternativeText}
				src={getStrapiMedia(CoverImage.data.attributes.url)}
				layout="fill"
			/>
		</div>
	);
};

CoverImage.propTypes = {
	alternativeText: PropTypes.string,
	CoverImage: PropTypes.shape({
		data: PropTypes.shape({
			attributes: PropTypes.shape({
				alternativeText: PropTypes.string,
				url: PropTypes.string.isRequired,
			}),
		}),
	}).isRequired,
};
