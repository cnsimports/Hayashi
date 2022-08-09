import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types';

import client from '@lib/apollo';

import { BlogGridItem } from './BlogGridItem';

import styles from './BlogGrid.module.css';
import { QUERY_ALL_POSTS, QUERY_POSTS_BY_TAG } from './blogQueries';

export const BlogGrid = ({ tag }) => {
	const { data, error, loading } = useQuery(tag !== 'All' ? QUERY_POSTS_BY_TAG : QUERY_ALL_POSTS, {
		client,
		variables: { tag },
	});

	if (error || loading) {
		return null;
	}

	return (
		<div className={styles['blog-grid']}>
			{data.posts.data.map((post, i) => (
				<BlogGridItem
					key={post.attributes.Title}
					thumbnail={
						post.attributes.FeaturedImage.data
							? post.attributes.FeaturedImage.data.attributes
							: { alternativeText: '', url: 'https://source.unsplash.com/random/?whisky' }
					}
					slug={post.attributes.slug}
					count={`${i + 1}`}
					title={post.attributes.Title}
				/>
			))}
		</div>
	);
};

BlogGrid.propTypes = {
	tag: PropTypes.string,
};
