import { useState } from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';

import client from '@lib/apollo';

import { BlogGrid } from '@components/Blog/BlogGrid';
import { Hero } from '@components/Hero/Hero';

import styles from '@styles/pages/Blog.module.css';

import { QUERY_BLOG } from '@lib/queries';

const Blog = ({ hero }) => {
	const [tag, setTag] = useState('All');

	return (
		<main>
			<NextSeo
				title="Hayashi Japanese Whisky | Blog"
				description="Within the evolving world of Japanese whisky, there&lsquo;s always more to be learned. Welcome to the Japanese whisky blog. We invite you to pour yourself a glass and delve into some of the industries most interesting conversations."
			/>
			<Hero
				narrow
				className="-pt-m"
				HeroTopLine={hero?.HeroTopLine}
				HeroMain={hero?.HeroMain}
				HeroBottomLine={hero?.HeroBottomLine}
			/>

			<div className={`container -sm -py-2xl -center ${styles.filters}`}>
				<div className="-granite -p-m">
					<button onClick={() => setTag('All')}>All</button>
					<button onClick={() => setTag('Blog')}>Japanese Whisky Blog</button>
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
