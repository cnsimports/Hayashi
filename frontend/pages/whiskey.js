import { gql } from '@apollo/client';
import { motion } from 'framer-motion';

import client from '@lib/apollo';

import { Hero } from '@components/Hero/Hero';
import { heroMotion } from '@components/Hero/Hero.motion';
import { Product } from '@components/Product/Product';

const Whiskey = (props) => {
	return (
		<main>
			<Hero>
				<motion.p variants={heroMotion} initial="hidden" animate="fade" className="h5">
					Our Whiskey
				</motion.p>
				<motion.h1 variants={heroMotion} initial="hidden" animate="fade" className="h2">
					Earned excellence in every expression.
				</motion.h1>
				<motion.p variants={heroMotion} initial="hidden" animate="fade" className="h5">
					Discover the Hayashi family of Ryukyu whisky made from pure indica rice.
				</motion.p>
			</Hero>
			<Product />
			<Product />
			<Product />
		</main>
	);
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

	return {
		props: {
			products: productsRes.products.data,
		},
		revalidate: 1,
	};
}

export default Whiskey;
