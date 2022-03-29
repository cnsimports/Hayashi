import styles from './Hero.module.css';

export const Hero = ({ children, narrow }) => (
	<div className={`${styles.hero} ${narrow ? styles.narrow : ''} -center`}>{children}</div>
);
