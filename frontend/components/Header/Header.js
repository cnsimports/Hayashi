import Link from 'next/link';
import { useState } from 'react';

import { Social } from '../Social/Social';

import { Logo } from '../SVG/Logo';
import { Menu } from '../SVG/Menu';

import styles from './Header.module.css';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className="container">
        <h1>
          <Link href="/">
            <a className={styles.logo}>
              <span className="screen-reader-text">Hayashi</span>
              <Logo width={147} height={26} />
            </a>
          </Link>
        </h1>

        <button className={styles['menu-activator']} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="menu">
          {menuOpen ? 'Close' : 'Menu'}
          <Menu width={25} height={14} />
        </button>
      </div>
      {menuOpen && (
        <div id="menu" className={styles['menu-container']}>
          <div className="container">
            <ul className={styles['primary-nav']}>
              <li>
                <Link href="/"><a className="h1">Ryukyu Whiskey</a></Link>
              </li>
              <li>
                <Link href="/"><a className="h1">Our Craft</a></Link>
              </li>
              <li>
                <Link href="/"><a className="h1">Blog</a></Link>
              </li>
              <li>
                <Link href="/"><a>Contact</a></Link>
              </li>
              <li>
                <Link href="/"><a>Where to buy</a></Link>
              </li>
              <li>
                <Link href="/"><a>Order online</a></Link>
              </li>
            </ul>
            <div className={styles['menu-footer']}>
              <p>&copy; {new Date().getFullYear()} Hayashi</p>
              <Link href="/"><a>Privacy Policy</a></Link>
              <Social />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};