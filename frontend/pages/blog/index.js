import { gql } from '@apollo/client';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import client from '@lib/apollo';

import { BlogGrid } from '@components/Blog/BlogGrid';
import { Hero } from '@components/Hero/Hero';
import { heroMotion } from '@components/Hero/Hero.motion';

const Blog = ({ hero, posts }) => {
	return (
		<main>
			<Hero narrow className="-pt-m" HeroTopLine={hero.HeroTopLine} HeroMain={hero.HeroMain} HeroBottomLine={hero.HeroBottomLine} />

			<div className="container">
				<BlogGrid posts={posts} />
			</div>
		</main>
	);
};

Blog.propTypes = {
	hero: PropTypes.object,
	posts: PropTypes.object,
};

export async function getStaticProps() {
	const { data: blogRes } = await client.query({
		query: gql`
			query {
				posts(sort: "id:desc") {
					data {
						attributes {
							slug
							Title
							FeaturedImage {
								data {
									attributes {
										alternativeText
										url
									}
								}
							}
						}
					}
				}
				blog {
					data {
						attributes {
							Hero {
								HeroTopLine
								HeroMain
								HeroBottomLine
							}
						}
					}
				}
			}
		`,
	});

	return {
		props: {
			hero: blogRes.blog.data.attributes.Hero,
			posts: blogRes.posts,
		},
		revalidate: 10,
	};
}

export default Blog;
