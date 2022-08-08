import React from 'react';
import PropTypes from 'prop-types';

import styles from './Slide.module.css';

export const Slide = React.forwardRef(({ children, className = '', bg, full }, ref) => (
	<div
		ref={ref}
		className={`${styles.slide} ${bg === 'dark' ? styles.dark : ''} ${full ? styles['-full'] : ''} ${className}`}
	>
		{children}
	</div>
));

Slide.displayName = 'Slide';

Slide.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
	className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
	bg: PropTypes.string,
	full: PropTypes.bool,
};
