import { gql } from '@apollo/client';

export const QUERY_POSTS_BY_TAG = gql`
	query PostsByTag($tag: String!) {
		posts(filters: { post_tags: { Tag: { eq: $tag } } }) {
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
	}
`;

export const QUERY_BLOG = gql`
	query {
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
`;

export const QUERY_ALL_POSTS = gql`
	query {
		posts(sort: "id:desc") {
			data {
				attributes {
					slug
					Title
					post_tags {
						data {
							attributes {
								Tag
							}
						}
					}
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
`;
