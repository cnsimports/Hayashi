import { gql } from '@apollo/client';
import PropTypes from 'prop-types';

import client from '@lib/apollo';

import { Hero } from '@components/Hero/Hero';

import { Button } from '@components/Button/Button';
import BlockManager from '@components/shared/BlockManager';

const Craft = ({ content, bottomCTA }) => {
	return (
		<main>
			<BlockManager blocks={content} />
			<Hero HeroMain={bottomCTA.title}>
				<Button href="/whiskey">
					<>
						<span className="arrow">&rarr;</span> {bottomCTA.linkText}
					</>
				</Button>
			</Hero>
		</main>
	);
};

Craft.propTypes = {
	bottomCTA: PropTypes.object,
	content: PropTypes.arrayOf(PropTypes.object),
};

export async function getStaticProps() {
	const { data: craftRes } = await client.query({
		query: gql`
			query {
				ourCraft {
					data {
						attributes {
							Content {
								... on ComponentHeroHero {
									HeroTopLine
									HeroMain
									HeroBottomLine
								}
								... on ComponentImagesCoverImage {
									CoverImage {
										data {
											attributes {
												alternativeText
												url
											}
										}
									}
								}
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
			content: craftRes.ourCraft.data.attributes.Content,
			bottomCTA: {
				title: craftRes.ourCraft.data.attributes.BottomCTA,
				linkText: craftRes.ourCraft.data.attributes.BottomCTALinkText,
			},
		},
		revalidate: 10,
	};
}

export default Craft;
