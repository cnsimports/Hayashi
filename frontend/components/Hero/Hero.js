import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { Button } from '@components/Button/Button';
import { heroMotion } from '@components/Hero/Hero.motion';

import styles from './Hero.module.css';

export const Hero = ({
	HeroTopLine,
	HeroMain,
	HeroBottomLine,
	Button: Btn,
	lightText,
	className,
	containerClasses = 'container',
	narrow,
	children,
}) => (
	<div className={`${styles.hero} ${narrow ? styles.narrow : ''} ${className} -center`}>
		<div className={containerClasses}>
			{HeroTopLine && (
				<motion.p variants={heroMotion} initial="hidden" animate="fade" className={`${styles['hero-pretitle']} -uppercase -text-md  ${lightText ? '-light' : ''}`}>
					{HeroTopLine}
				</motion.p>
			)}
			{HeroMain && (
				<motion.h1 variants={heroMotion} initial="hidden" animate="fade" className={`${lightText ? '-light' : ''}`}>
					{HeroMain}
				</motion.h1>
			)}
			{HeroBottomLine && (
				<motion.p variants={heroMotion} initial="hidden" animate="fade" className={`${styles['hero-text']} ${lightText ? '-light' : ''}`}>
					{HeroBottomLine}
				</motion.p>
			)}
			{children}
			{Btn && (
				<Button href={Btn?.URL}>
					<>
						<span className="arrow">&rarr;</span> {Btn.Text}
					</>
				</Button>
			)}
		</div>
	</div>
);

Hero.propTypes = {
	HeroTopLine: PropTypes.string,
	HeroMain: PropTypes.string.isRequired,
	HeroBottomLine: PropTypes.string,
	Button: PropTypes.object,
	lightText: PropTypes.bool,
	narrow: PropTypes.bool,
	containerClasses: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
