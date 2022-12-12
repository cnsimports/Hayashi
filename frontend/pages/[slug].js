import PropTypes from 'prop-types';
import client from '@lib/apollo';

import { QUERY_PAGES_BY_SLUG, QUERY_PAGE_SLUGS } from '@lib/queries';

import BlockManager from '@components/shared/BlockManager';

const Page = ({ content }) => <main>{content && <BlockManager blocks={content} />}</main>;

Page.propTypes = {
	content: PropTypes.arrayOf(PropTypes.object).isRequired,
	title: PropTypes.string.isRequired,
};

export async function getStaticPaths() {
	const { data: pageRes } = await client.query({
		query: QUERY_PAGE_SLUGS,
	});

	return {
		paths: pageRes.pages.data.map((page) => ({
			params: {
				slug: page.attributes.slug,
			},
		})),
		fallback: false,
	};
}

export async function getStaticProps({ params = {} } = {}) {
	const { slug } = params;
	const { data: pageRes } = await client.query({
		variables: {
			slug,
		},
		query: QUERY_PAGES_BY_SLUG,
	});

	const seoData = {
		title: `Hayashi Japanese Whisky | ${pageRes.pages.data[0].attributes.Title}`,
		description:
			'Earned excellence in every expression. Discover the Hayashi family of Ryukyu whisky made from pure indica rice.',
	};

	return {
		props: {
			content: pageRes.pages.data[0].attributes.Content,
			seoData,
		},
		revalidate: 10,
	};
}

export default Page;
