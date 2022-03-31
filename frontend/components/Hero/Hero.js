import PropTypes from 'prop-types';

import styles from './Hero.module.css';

export const Hero = ({ children, narrow }) => (
	<div className={`${styles.hero} ${narrow ? styles.narrow : ''} -center`}>{children}</div>
);

Hero.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
	narrow: PropTypes.bool,
};
