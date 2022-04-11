import React from 'react';
import { gql } from '@apollo/client';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import client from '@lib/apollo';

import { Hero } from '@components/Hero/Hero';
import { heroMotion } from '@components/Hero/Hero.motion';

import Image from 'next/image';
import { Button } from '@components/Button/Button';

const Craft = ({ heroes, bottomCTA }) => {
	return (
		<main>
			{heroes.map((hero) => (
				<React.Fragment key={hero.HeroTopLine}>
					<Hero>
						<div className="container -p-m">
							{hero.HeroTopLine && (
								<motion.p variants={heroMotion} initial="hidden" animate="fade" className="h5">
									{hero.HeroTopLine}
								</motion.p>
							)}
							<motion.h1 variants={heroMotion} initial="hidden" animate="fade" className="h2">
								{hero.HeroMain}
							</motion.h1>
							{hero.HeroBottomLine && (
								<motion.p variants={heroMotion} initial="hidden" animate="fade" className="h5">
									{hero.HeroBottomLine}
								</motion.p>
							)}
						</div>
					</Hero>
					{/* @TODO :: Pull image from Strapi */}
					<Image alt="" src="https://source.unsplash.com/1440x920" layout="responsive" width={1440} height={820} />
				</React.Fragment>
			))}

			<Hero>
				<div className="container -p-m">
					<h1 className="h2">{bottomCTA.title}</h1>
					<Button href="/whiskey">
						<>
							<span className="arrow">&rarr;</span> {bottomCTA.linkText}
						</>
					</Button>
				</div>
			</Hero>
		</main>
	);
};

Craft.propTypes = {
	heroes: PropTypes.arrayOf(PropTypes.object),
	bottomCTA: PropTypes.object,
};

export async function getStaticProps() {
	const { data: craftRes } = await client.query({
		query: gql`
			query {
				ourCraft {
					data {
						attributes {
							Hero {
								HeroTopLine
								HeroMain
								HeroBottomLine
							}
							BottomCTA
							BottomCTALinkText
						}
					}
				}
			}
		`,
	});

	return {
		props: {
			heroes: craftRes.ourCraft.data.attributes.Hero,
			bottomCTA: {
				title: craftRes.ourCraft.data.attributes.BottomCTA,
				linkText: craftRes.ourCraft.data.attributes.BottomCTALinkText,
			},
		},
		revalidate: 10,
	};
}

export default Craft;
