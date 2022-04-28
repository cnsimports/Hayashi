
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
					Content {
            ... on ComponentContactContactForm {
              Recipient
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
