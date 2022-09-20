import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './Button.module.css';

export const Button = ({ children, href, className = '', onClick, type, disabled }, props) => (
	<>
		{href ? (
			<Link href={href} onClick={onClick} {...props}>
				<a className={`${styles.button} ${className}`}>{children}</a>
			</Link>
		) : (
			<button className={`${styles.button} ${className}`} onClick={onClick} type={type} disabled={disabled} {...props}>
				{children}
			</button>
		)}
	</>
);

Button.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
	href: PropTypes.string,
	disabled: PropTypes.bool,
	className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
	onClick: PropTypes.func,
	type: PropTypes.string,
};
