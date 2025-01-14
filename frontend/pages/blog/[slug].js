import { gql } from '@apollo/client';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import PropTypes from 'prop-types';

import { Hero } from '@components/Hero/Hero';
import { SharePost } from '@components/SharePost/SharePost';

import client from '@lib/apollo';
import { getStrapiMedia } from '@lib/media';

const Post = ({ post }) => {
	const { Title, Content, FeaturedImage } = post[0].attributes;

	return (
		<>
			{Title && Content && (
				<Hero className="blog" containerClasses="container -sm" HeroMain={Title} lightText>
					<div className="featured-image">
						<Image
							alt={FeaturedImage.data?.attributes.alternativeText || ''}
							src={getStrapiMedia(
								FeaturedImage.data?.attributes.url || 'https://source.unsplash.com/random/?city,night'
							)}
							layout="fill"
						/>
					</div>
				</Hero>
			)}

			{Content && (
				<div className="container -sm -text-md">
					<ReactMarkdown>{Content}</ReactMarkdown>
				</div>
			)}

			<div className="container -sm -py-2xl -center">
				<SharePost />
			</div>
		</>
	);
};

Post.propTypes = {
	post: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export async function getStaticPaths() {
	const { data: blogsRes } = await client.query({
		query: gql`
			query {
				posts {
					data {
						attributes {
							slug
						}
					}
				}
			}
		`,
	});

	return {
		paths: blogsRes.posts.data.map((article) => ({
			params: {
				slug: article.attributes.slug,
			},
		})),
		fallback: 'blocking',
	};
}

export async function getStaticProps({ params = {} } = {}) {
	const { slug } = params;
	const { data: blogsRes } = await client.query({
		variables: {
			slug,
		},
		query: gql`
			query PostBySlug($slug: String!) {
				posts(filters: { slug: { eq: $slug } }) {
					data {
						attributes {
							Title
							Content
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
			}
		`,
	});

	return {
		props: {
			post: blogsRes.posts.data,
		},
		revalidate: 10,
	};
}

export default Post;
