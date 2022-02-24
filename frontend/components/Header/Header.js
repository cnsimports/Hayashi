import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion';

import { Social } from '@components/Social/Social';

import { Logo } from '@svg/Logo';
import { Menu } from '@svg/Menu';

import styles from './Header.module.css';
import { container, item, navContainer } from './Header.motion';

import { getRelativeCoordinates } from '@util/getRelativeCoordinates';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverMenu, setHoverMenu] = useState('');
  const [mousePosition, setMousePosition] = useState({});
  const boxRef = useRef();

  const handleMouseMove = e => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };

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
            ref={boxRef}
            onMouseMove={e => handleMouseMove(e)}
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
                  <Link href="/">
                    <a className="h1" onMouseEnter={() => setHoverMenu('whiskey')} onMouseLeave={() => setHoverMenu('')}>Ryukyu Whiskey</a>
                  </Link>
                </motion.li>
                <motion.li variants={item}>
                  <Link href="/">
                    <a className="h1" onMouseEnter={() => setHoverMenu('craft')} onMouseLeave={() => setHoverMenu('')}>Our Craft</a>
                  </Link>
                </motion.li>
                <motion.li variants={item}>
                  <Link href="/">
                    <a className="h1" onMouseEnter={() => setHoverMenu('blog')} onMouseLeave={() => setHoverMenu('')}>Blog</a>
                  </Link>
                </motion.li>
                <motion.li variants={item}>
                  <Link href="/">
                    <a>Contact</a>
                  </Link>
                </motion.li>
                <motion.li variants={item}>
                  <Link href="/">
                    <a>Where to buy</a>
                  </Link>
                </motion.li>
                <motion.li variants={item}>
                  <Link href="/">
                    <a>Order online</a>
                  </Link>
                </motion.li>
              </motion.ul>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className={styles['menu-footer']}>
                <p>&copy; {new Date().getFullYear()} Hayashi</p>
                <Link href="/"><a>Privacy Policy</a></Link>
                <Social />
              </motion.div>
              <AnimatePresence>
                {hoverMenu !== '' && (
                  <motion.div className={styles['image-float']} initial={{ opacity: 0 }} animate={{ opacity: 1, x: mousePosition.centerX * 6, y: mousePosition.centerY * 6 }} exit={{ opacity: 0 }}>
                    <AnimatePresence>
                      {hoverMenu === 'whiskey' && <Image src="/images/whiskey_shelf.jpeg" layout="responsive" height={600} width={450} />}
                      {hoverMenu === 'craft' && <Image src="/images/craft.jpeg" layout="responsive" height={600} width={450} />}
                      {hoverMenu === 'blog' && <Image src="/images/blog.jpeg" layout="responsive" height={600} width={450} />}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};