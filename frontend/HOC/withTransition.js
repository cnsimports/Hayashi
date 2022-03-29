import { motion } from "framer-motion";
import Image from "next/image";

import { Kanji } from "@components/SVG/Kanji";

import styles from './withTransition.module.css';

const withTransition = (OriginalComponent) => {
  return () => (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <OriginalComponent />
      </motion.div>
      <motion.div
        className={styles['slide-in']}
        initial={{ y: '100%' }}
        animate={{ y: '100%' }}
        exit={{ y: 0 }}
        transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
        onAnimationStart={() => document.body.classList.add('overflow-hidden')}
      >
        <Kanji width={0} height={0} />
        <div className={styles.kanji}>
          <Image alt="" src="/images/gold-foil.jpeg" priority layout="intrinsic" width={271} height={231} />
        </div>
      </motion.div>
      <motion.div
        className={styles['slide-out']}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 1, ease: [0.87, 0, 0.13, 1] }}
        onAnimationComplete={() =>
          document.body.classList.remove('overflow-hidden')
        }
      >
        <Kanji width={0} height={0} />
        <div className={styles.kanji}>
          <Image alt="" src="/images/gold-foil.jpeg" priority layout="intrinsic" width={271} height={231} />
        </div>
      </motion.div>
    </>
  );
};

export default withTransition;