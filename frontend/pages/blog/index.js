import { useState } from 'react';
import PropTypes from 'prop-types';

import client from '@lib/apollo';

import { BlogGrid } from '@components/Blog/BlogGrid';
import { Hero } from '@components/Hero/Hero';

import styles from '@styles/pages/Blog.module.css';
import { QUERY_BLOG } from '@components/Blog/blogQueries';

const Blog = ({ hero }) => {
	const [tag, setTag] = useState('All');

	return (
		<main>
			<Hero
				narrow
				className="-pt-m"
				HeroTopLine={hero.HeroTopLine}
				HeroMain={hero.HeroMain}
				HeroBottomLine={hero.HeroBottomLine}
			/>

			<div className={`container -sm -py-2xl -center ${styles.filters}`}>
				<div className="-granite -p-m">
					<button onClick={() => setTag('All')}>All</button>
					<button onClick={() => setTag('Blog')}>Japanese Whiskey Blog</button>
					<button onClick={() => setTag('News')}>News</button>
				</div>
			</div>

			<div className="container">
				<BlogGrid tag={tag} />
			</div>
		</main>
	);
};

Blog.propTypes = {
	hero: PropTypes.object,
};

export async function getStaticProps() {
	const { data: blogRes } = await client.query({
		query: QUERY_BLOG,
	});

	return {
		props: {
			hero: blogRes.blog.data.attributes.Hero,
		},
		revalidate: 10,
	};
}

export default Blog;
