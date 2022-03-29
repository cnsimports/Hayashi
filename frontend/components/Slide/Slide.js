import styles from './Slide.module.css';

export const Slide = ({ children, className = '', bg }) => (
	<div className={`${styles.slide} ${bg === 'dark' ? styles.dark : ''} ${className}`}>{children}</div>
);
