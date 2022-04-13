import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { heroMotion } from '@components/Hero/Hero.motion';

import styles from './Hero.module.css';

export const Hero = ({
	HeroTopLine,
	HeroMain,
	HeroBottomLine,
	lightText,
	containerClasses = 'container -p-m',
	narrow,
	children,
}) => (
	<div className={`${styles.hero} ${narrow ? styles.narrow : ''} -center`}>
		<div className={containerClasses}>
			{HeroTopLine && (
				<motion.p variants={heroMotion} initial="hidden" animate="fade" className={`h5 ${lightText ? '-light' : ''}`}>
					{HeroTopLine}
				</motion.p>
			)}
			{HeroMain && (
				<motion.h1 variants={heroMotion} initial="hidden" animate="fade" className={`h2 ${lightText ? '-light' : ''}`}>
					{HeroMain}
				</motion.h1>
			)}
			{HeroBottomLine && (
				<motion.p variants={heroMotion} initial="hidden" animate="fade" className={`h5 ${lightText ? '-light' : ''}`}>
					{HeroBottomLine}
				</motion.p>
			)}
			{children}
		</div>
	</div>
);

Hero.propTypes = {
	HeroTopLine: PropTypes.string,
	HeroMain: PropTypes.string.isRequired,
	HeroBottomLine: PropTypes.string,
	lightText: PropTypes.bool,
	narrow: PropTypes.bool,
	containerClasses: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
