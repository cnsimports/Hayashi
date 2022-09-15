import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import { Logo } from '@components/SVG/Logo';

import styles from './Gate.module.css';

const Gate = forwardRef(({ isLegal, setIsLegal }, ref) => (
	<div className={styles['age-gate']} ref={ref}>
		<div className={styles.content}>
			<Logo className={styles.logo} width={267} height={41} />
			<h1>Are you 21 or older?</h1>
			<div className={styles.actions}>
				<button onClick={() => setIsLegal('true')}>Yes</button>
				<button onClick={() => setIsLegal('false')}>No</button>
			</div>
			{isLegal === 'false' && (
				<p>
					Your honesty is appreciated. As a reward enjoy <a href="#">these non-alcoholic mocktail recipes</a>
				</p>
			)}
			<Image alt="" className={styles.granite} priority src="/images/granite.jpeg" layout="fill" />
		</div>
		<div className={styles.bottle}>
			<Image alt="" src="https://res.cloudinary.com/hayashi-whisky/image/upload/v1663186177/Hayashi_24_Bottle_transparent_1_3603e64a65.png" priority layout="fill" />
		</div>
	</div>
));

Gate.displayName = 'Gate';

Gate.propTypes = {
	isLegal: PropTypes.string,
	setIsLegal: PropTypes.func,
};

export default Gate;
