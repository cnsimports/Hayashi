import { gql } from '@apollo/client';
import { motion } from 'framer-motion';

import client from '@lib/apollo';

import { BlogGrid } from '@components/Blog/BlogGrid';
import { Hero } from '@components/Hero/Hero';
import { heroMotion } from '@components/Hero/Hero.motion';

const Blog = ({ hero, posts }) => {
	return (
		<main>
			<Hero narrow className="-pt-m">
				<div className="container">
					{hero.HeroTopLine && (
						<motion.p variants={heroMotion} initial="hidden" animate="fade" className="h5">
							{hero.HeroTopLine}
						</motion.p>
					)}
					<motion.h1 variants={heroMotion} initial="hidden" animate="fade" className="h2">
						{hero.HeroMain}
					</motion.h1>
				</div>
				{hero.HeroBottomLine && (
					<div className="container -sm">
						<motion.p variants={heroMotion} initial="hidden" animate="fade" className="h5">
							{hero.HeroBottomLine}
						</motion.p>
					</div>
				)}
			</Hero>

			<div className="container">
				<BlogGrid posts={posts} />
			</div>
		</main>
	);
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
			posts: blogRes.posts
		},
		revalidate: 10,
	};
}

export default Blog;
