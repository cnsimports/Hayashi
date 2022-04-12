import PropTypes from 'prop-types';

import { BlogGridItem } from './BlogGridItem';

import styles from './BlogGrid.module.css';

export const BlogGrid = ({ posts }) => {
	return (
		<div className={styles['blog-grid']}>
			{posts.data.map((post, i) => (
				<BlogGridItem
					key={post.attributes.Title}
					thumbnail={post.attributes.FeaturedImage}
					slug={post.attributes.slug}
					count={`${i + 1}`}
					title={post.attributes.Title}
					featuredImage={post.attributes.FeaturedImage}
				/>
			))}
		</div>
	);
};

BlogGrid.propTypes = {
	posts: PropTypes.arrayOf(PropTypes.object),
};
