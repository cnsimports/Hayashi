import Link from "next/link";

import styles from './Button.module.css';

export const Button = ({ children, href, className, onClick }, props) => (
  <>
    {href ? (
      <Link scroll={false} href={href} onClick={onClick} {...props}>
        <a className={`${styles.button} ${className}`}>{children}</a>
      </Link>
    ) : (
      <button className={`${styles.button} ${className}`} onClick={onClick}>{children}</button>
    )}
  </>
)