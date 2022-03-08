import React from 'react';
import Image from 'next/image';

import { Logo } from '@components/SVG/Logo';

import styles from './Gate.module.css';

export const Gate = React.forwardRef(({isLegal, setIsLegal}, ref) => (
  <div className={styles['age-gate']} ref={ref}>
    <div className={styles.content}>
      <Logo className={styles.logo} width={267} height={41} />
      <h1>Are you 21 or older?</h1>
      <div className={styles.actions}>
        <button onClick={() => setIsLegal('true')}>Yes</button>
        <button onClick={() => setIsLegal('false')}>No</button>
      </div>
      {isLegal === 'false' && (
        <p>Your honesty is appreciated. As a reward enjoy <a href="#">these non-alcoholic mocktail recipes</a></p>
      )}
      <Image className={styles.granite} priority src="/images/granite.jpeg" layout="fill" />
    </div>
    <div className={styles.bottle}>
      <Image src="/images/bottle01.png" priority layout="fill" />
    </div>
  </div>
));