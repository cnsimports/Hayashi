import { BlogGridItem } from './BlogGridItem';

import styles from './BlogGrid.module.css';

export const BlogGrid = () => {
	return (
		<div className={styles['blog-grid']}>
			{/* @TODO :: Query blog post type */}
			<BlogGridItem />
			<BlogGridItem />
			<BlogGridItem />
			<BlogGridItem />
			<BlogGridItem />
		</div>
	);
};
