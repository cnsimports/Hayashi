import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

import { getRelativeCoordinates } from '@util/getRelativeCoordinates';

import { getStrapiMedia } from '@lib/media';

import styles from './HoverLinks.module.css';

export const HoverLinks = ({ title, links }) => {
	const [mousePosition, setMousePosition] = useState({});
	const [active, setActive] = useState('');
	const hoverLinkRef = useRef(null);

	const handleMouseMove = (e) => {
		setMousePosition(getRelativeCoordinates(e, hoverLinkRef.current));
	};

	return (
		<div className={styles.cta}>
			<div className="container">
				<div className={styles['hover-link-images']}>
					<AnimatePresence exitBeforeEnter>
						{links[active - 1]?.link_images.data.map((image, i) => (
							<motion.div
								key={`${active}-${image.attributes.id}-${i}`}
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									x: mousePosition.centerX * (i === 1 ? 10 : 30),
									y: mousePosition.centerY * (i === 1 ? 10 : (30 + 50))
								}}
								exit={{ opacity: 0 }}
								transition={{ ease: 'linear' }}
							>
								<Image
									alt={image.attributes.alternativeText}
									src={getStrapiMedia(image.attributes.url)}
									layout="intrinsic"
									width={320}
									height={426}
								/>
							</motion.div>
						))}
					</AnimatePresence>
				</div>
				<div ref={hoverLinkRef} className={styles['hover-links']} onMouseMove={(e) => handleMouseMove(e)}>
					{title && <p>{title}</p>}
					{links.map(({ link_content, link_url, id }) => (
						<Link href={link_url} key={id}>
							<a className="h3" onMouseEnter={() => setActive(id)} onMouseLeave={() => setActive('')}>
								{link_content}
							</a>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

HoverLinks.propTypes = {
	title: PropTypes.string,
	links: PropTypes.shape({
		link_content: PropTypes.string,
		link_rul: PropTypes.string,
		link_images: PropTypes.object,
		id: PropTypes.string,
	}).isRequired
};
