import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { Button } from '@components/Button/Button';
import { CoverImage } from '@components/CoverImage/CoverImage';
import { heroMotion } from '@components/Hero/Hero.motion';
import ReactMarkdown from 'react-markdown';

import styles from './Hero.module.css';

export const Hero = ({
	HeroTopLine,
	HeroMain,
	StylizedText,
	SecondLineIndented,
	HeroBottomLine,
	Button: Btn,
	Image,
	lightText,
	className,
	containerClasses = 'container',
	narrow,
	children,
}) => {
	return (
		<div
			className={`${styles.hero} ${narrow ? styles.narrow : ''} ${className} -center ${
				Image?.data ? styles['hero-with-image'] : ''
			}`}
		>
			<div className={containerClasses}>
				{HeroTopLine && (
					<motion.p
						variants={heroMotion}
						initial="hidden"
						animate="fade"
						className={`${styles['hero-pretitle']} -uppercase -text-md  ${lightText ? '-light' : ''}`}
					>
						{HeroTopLine}
					</motion.p>
				)}
				{HeroMain && (
					<motion.h1
						variants={heroMotion}
						initial="hidden"
						animate="fade"
						className={`${lightText ? '-light' : ''} ${StylizedText ? styles['stylized-text'] : ''} ${
							SecondLineIndented ? styles['second-line-indented'] : ''
						}`}
					>
						<ReactMarkdown>{HeroMain}</ReactMarkdown>
					</motion.h1>
				)}
				{HeroBottomLine && (
					<motion.p
						variants={heroMotion}
						initial="hidden"
						animate="fade"
						className={`${styles['hero-text']} ${lightText ? '-light' : ''}`}
					>
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
			{Image?.data && <CoverImage CoverImage={Image} className={`${styles['hero-image']}`} />}
		</div>
	);
};

Hero.propTypes = {
	HeroTopLine: PropTypes.string,
	HeroMain: PropTypes.string.isRequired,
	StylizedText: PropTypes.bool,
	SecondLineIndented: PropTypes.bool,
	HeroBottomLine: PropTypes.string,
	Button: PropTypes.object,
	Image: PropTypes.shape({
		data: PropTypes.shape({
			attributes: PropTypes.shape({
				mime: PropTypes.string,
				alternativeText: PropTypes.string,
				url: PropTypes.string.isRequired,
			}),
		}),
	}),
	lightText: PropTypes.bool,
	narrow: PropTypes.bool,
	containerClasses: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
