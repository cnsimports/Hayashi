import { gql } from '@apollo/client';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import client from '@lib/apollo';

import { Hero } from '@components/Hero/Hero';
import { heroMotion } from '@components/Hero/Hero.motion';
import { Product } from '@components/Product/Product';

const Whiskey = ({ products, hero }) => {
	const { HeroTopLine, HeroMain, HeroBottomLine } = hero.attributes.Hero;
	return (
		<main>
			<Hero>
				<motion.p variants={heroMotion} initial="hidden" animate="fade" className="h5">
					{HeroTopLine}
				</motion.p>
				<motion.h1 variants={heroMotion} initial="hidden" animate="fade" className="h2">
					{HeroMain}
				</motion.h1>
				<motion.p variants={heroMotion} initial="hidden" animate="fade" className="h5">
					{HeroBottomLine}
				</motion.p>
			</Hero>
			{products.map(({ attributes: { ProductName, ProductBlurb, ProductDescription, product_notes } }) => (
				<Product
					key={ProductName}
					name={ProductName}
					blurb={ProductBlurb}
					desc={ProductDescription}
					notes={product_notes}
				/>
			))}
		</main>
	);
};

Whiskey.propTypes = {
	products: PropTypes.object,
	hero: PropTypes.object,
};

export async function getStaticProps() {
	const { data: productsRes } = await client.query({
		query: gql`
			query {
				products {
					data {
						attributes {
							ProductName
							ProductBlurb
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
		`,
	});

	const { data: heroRes } = await client.query({
		query: gql`
			query {
				ryukyuWhiskey {
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
			hero: heroRes.ryukyuWhiskey.data,
			products: productsRes.products.data,
		},
		revalidate: 1,
	};
}

export default Whiskey;
