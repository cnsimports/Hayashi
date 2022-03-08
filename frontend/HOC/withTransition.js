import { motion } from "framer-motion";
import Image from "next/image";

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
        <Image src="/images/kanji.png" priority layout="fixed" width="292" height="270" />
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
        <Image src="/images/kanji.png" priority layout="fixed" width="292" height="270" />
      </motion.div>
    </>
  );
};

export default withTransition;