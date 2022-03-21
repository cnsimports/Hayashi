import { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

import { getRelativeCoordinates } from '@util/getRelativeCoordinates';

import styles from './HoverLinks.module.css';

export const HoverLinks = () => {
  const [mousePosition, setMousePosition] = useState({});
  const [active, setActive] = useState('');
  const hoverLinkRef = useRef(null);

  const handleMouseMove = e => {
    setMousePosition(getRelativeCoordinates(e, hoverLinkRef.current));
  };

  return (
    <div className={styles.cta}>
      <div className="container">
        <div className={styles['hover-link-images']}>
          <AnimatePresence exitBeforeEnter>
            {active === 'store' && (
              <>
                <motion.div key="img1" initial={{ opacity: 0 }} animate={{ opacity: 1, x: mousePosition.centerX * 30, y: mousePosition.centerY * 30 + 50 }} exit={{ opacity: 0 }} transition={{ ease: 'linear' }}>
                  <Image src="https://source.unsplash.com/random/320x426" layout="intrinsic" width={320} height={426} />
                </motion.div>
                <motion.div key="img2" initial={{ opacity: 0 }} animate={{ opacity: 1, x: mousePosition.centerX * 10, y: mousePosition.centerY * 10 }} exit={{ opacity: 0 }} transition={{ ease: 'linear' }}>
                  <Image src="https://source.unsplash.com/random/320x426" layout="intrinsic" width={320} height={426} />
                </motion.div>
                <motion.div key="img3" initial={{ opacity: 0 }} animate={{ opacity: 1, x: mousePosition.centerX * 30, y: mousePosition.centerY * 30  + 50}} exit={{ opacity: 0 }} transition={{ ease: 'linear' }}>
                  <Image src="https://source.unsplash.com/random/320x426" layout="intrinsic" width={320} height={426} />
                </motion.div>
              </>
            )}
            {active === 'order' && (
              <>
                <motion.div key="img4" initial={{ opacity: 0 }} animate={{ opacity: 1, x: mousePosition.centerX * 30, y: mousePosition.centerY * 30 + 50 }} exit={{ opacity: 0 }} transition={{ ease: 'linear' }}>
                  <Image src="https://source.unsplash.com/random/640x852" layout="intrinsic" width={320} height={426} />
                </motion.div>
                <motion.div key="img5" initial={{ opacity: 0 }} animate={{ opacity: 1, x: mousePosition.centerX * 10, y: mousePosition.centerY * 10 }} exit={{ opacity: 0 }} transition={{ ease: 'linear' }}>
                  <Image src="https://source.unsplash.com/random/640x852" layout="intrinsic" width={320} height={426} />
                </motion.div>
                <motion.div key="img6" initial={{ opacity: 0 }} animate={{ opacity: 1, x: mousePosition.centerX * 30, y: mousePosition.centerY * 30 + 50 }} exit={{ opacity: 0 }} transition={{ ease: 'linear' }}>
                  <Image src="https://source.unsplash.com/random/640x852" layout="intrinsic" width={320} height={426} />
                </motion.div>
              </>
            )}
            {active === 'products' && (
              <>
                <motion.div key="img7" initial={{ opacity: 0 }} animate={{ opacity: 1, x: mousePosition.centerX * 30, y: mousePosition.centerY * 30 + 50 }} exit={{ opacity: 0 }} transition={{ ease: 'linear' }}>
                  <Image src="https://source.unsplash.com/random/320x426" layout="intrinsic" width={320} height={426} />
                </motion.div>
                <motion.div key="img8" initial={{ opacity: 0 }} animate={{ opacity: 1, x: mousePosition.centerX * 10, y: mousePosition.centerY * 10 }} exit={{ opacity: 0 }} transition={{ ease: 'linear' }}>
                  <Image src="https://source.unsplash.com/random/320x426" layout="intrinsic" width={320} height={426} />
                </motion.div>
                <motion.div key="img9" initial={{ opacity: 0 }} animate={{ opacity: 1, x: mousePosition.centerX * 30, y: mousePosition.centerY * 30 + 50 }} exit={{ opacity: 0 }} transition={{ ease: 'linear' }}>
                  <Image src="https://source.unsplash.com/random/320x426" layout="intrinsic" width={320} height={426} />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
        <div ref={hoverLinkRef} className={styles['hover-links']} onMouseMove={e => handleMouseMove(e)}>
          <p>It starts with one sip.</p>
          <Link scroll={false} href="/whiskey">
            <a className="h3" onMouseEnter={() => setActive('store')} onMouseLeave={() => setActive('')}>
              Find a Store
            </a>
            </Link>
          <Link scroll={false} href="/whiskey">
            <a className="h3" onMouseEnter={() => setActive('order')} onMouseLeave={() => setActive('')}>
              Order Online
            </a>
            </Link>
          <Link scroll={false} href="/whiskey">
            <a className="h3" onMouseEnter={() => setActive('products')} onMouseLeave={() => setActive('')}>
              View Products
            </a>
            </Link>
        </div>
      </div>
    </div>
  )
}