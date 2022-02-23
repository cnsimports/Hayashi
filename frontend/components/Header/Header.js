import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';

import { Social } from '../Social/Social';

import { Logo } from '../SVG/Logo';
import { Menu } from '../SVG/Menu';

import styles from './Header.module.css';
import { container, item, navContainer } from './Header.motion';

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
          <Menu className={menuOpen ? styles['-active'] : ''} width={25} height={14} />
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div  
            variants={navContainer}
            initial="hidden"
            animate="show"
            exit="hidden"
            id="menu"
            className={styles['menu-container']}
          >
            <div className="container">
              <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                exit="hidden"
                className={styles['primary-nav']}
              >
                <motion.li variants={item}>
                  <Link href="/"><a className="h1">Ryukyu Whiskey</a></Link>
                </motion.li>
                <motion.li variants={item}>
                  <Link href="/"><a className="h1">Our Craft</a></Link>
                </motion.li>
                <motion.li variants={item}>
                  <Link href="/"><a className="h1">Blog</a></Link>
                </motion.li>
                <motion.li variants={item}>
                  <Link href="/"><a>Contact</a></Link>
                </motion.li>
                <motion.li variants={item}>
                  <Link href="/"><a>Where to buy</a></Link>
                </motion.li>
                <motion.li variants={item}>
                  <Link href="/"><a>Order online</a></Link>
                </motion.li>
              </motion.ul>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className={styles['menu-footer']}>
                <p>&copy; {new Date().getFullYear()} Hayashi</p>
                <Link href="/"><a>Privacy Policy</a></Link>
                <Social />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};