import { gql } from '@apollo/client';

export const QUERY_PAGE_SLUGS = gql`
	query {
		pages {
			data {
				attributes {
					slug
				}
			}
		}
	}
`;

export const QUERY_PAGES_BY_SLUG = gql`
	query PageBySlug($slug: String!) {
		pages(filters: { slug: { eq: $slug } }) {
			data {
				attributes {
					Title
					Content {
						... on ComponentContactContactForm {
							__typename
						}
						... on ComponentProductsProductList {
							products {
								data {
									attributes {
										ProductName
										ProductBlurb
										ProductImage {
											data {
												attributes {
													url
													alternativeText
												}
											}
										}
										ProductPhoto {
											data {
												attributes {
													url
													alternativeText
												}
											}
										}
										ProductDescription
										product_notes {
											data {
												attributes {
													ProductNote
												}
											}
										}
									}
								}
							}
						}
						... on ComponentHeroHero {
							HeroTopLine
							HeroMain
							HeroBottomLine
							Button {
								Text
								URL
							}
							Image {
								data {
									attributes {
										mime
										alternativeText
										url
									}
								}
							}
						}
						... on ComponentImagesCoverImage {
							Parallax
							CoverImage {
								data {
									attributes {
										mime
										alternativeText
										url
									}
								}
							}
						}
						... on ComponentContentContent {
							content
						}
						... on ComponentContentSplitContent {
							topic
							title
							content
							image {
								data {
									attributes {
										mime
										alternativeText
										url
									}
								}
							}
							variant
						}
					}
				}
			}
		}
	}
`;

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

export const QUERY_HOME = gql`
	query {
		homepage {
			data {
				attributes {
					home_fields {
						slide_1_title
						slide_2_title
						slide_2_content
						slide_2_image {
							data {
								attributes {
									alternativeText
									url
									width
									height
								}
							}
						}
						slide_3_title
						slide_3_content
						slide_3_image {
							data {
								attributes {
									alternativeText
									url
									width
									height
								}
							}
						}
						slide_4_title
						product_list {
							products {
								data {
									attributes {
										ProductImage {
											data {
												attributes {
													url
													alternativeText
												}
											}
										}
										ProductName
									}
								}
							}
						}
						slide_5_title
						slide_6_title
						slide_7_image {
							data {
								attributes {
									alternativeText
									url
									width
									height
								}
							}
						}
						slide_8_title
						slide_8_button {
							Text
							URL
						}
						slide_9_image {
							data {
								id
								attributes {
									alternativeText
									url
									width
									height
								}
							}
						}
					}
					link_hover {
						title
						link_hover_item {
							id
							link_content
							link_url
							link_images {
								data {
									id
									attributes {
										alternativeText
										url
										width
										height
									}
								}
							}
						}
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

export const QUERY_PRODUCTS = gql`
	query {
		products {
			data {
				attributes {
					ProductName
				}
			}
		}
	}
`;
