import PropTypes from 'prop-types';

import styles from './Progress.module.css';

export const Progress = ({ style }) => {
	return (
		<div
			className={`progress-wrap ${styles['progress-wrap']} ${styles['active-progress']}`}
			style={{ '--c-fade': '#000' }}
		>
			<svg
				style={style}
				className={`${styles['progress-circle']} ${styles['svg-content']}`}
				width="100%"
				height="100%"
				viewBox="-1 -1 102 102"
			>
				<path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
			</svg>
		</div>
	);
};

Progress.propTypes = {
	style: PropTypes.string,
};
