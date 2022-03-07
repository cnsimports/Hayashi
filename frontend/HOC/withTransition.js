import { motion } from "framer-motion";
import Image from "next/image";

import styles from './withTransition.module.css';

const withTransition = (OriginalComponent, props) => {
  return () => (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <OriginalComponent {...props} />
      </motion.div>
      <motion.div
        className={styles['slide-in']}
        initial={{ y: '100%' }}
        animate={{ y: '100%' }}
        exit={{ y: 0 }}
        transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
      >
        <Image src="/images/kanji.png" layout="fixed" width="292" height="270" />
      </motion.div>
      <motion.div
        className={styles['slide-out']}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 1, ease: [0.165, 0.84, 0.44, 1] }}
      >
        <Image src="/images/kanji.png" layout="fixed" width="292" height="270" />
      </motion.div>
    </>
  );
};

export default withTransition;