import PropTypes from 'prop-types';

import styles from './Slide.module.css';

export const Slide = ({ children, className = '', bg }) => (
	<div className={`${styles.slide} ${bg === 'dark' ? styles.dark : ''} ${className}`}>{children}</div>
);

Slide.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
	className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
	bg: PropTypes.string,
};
