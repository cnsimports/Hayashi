import { ApolloClient, InMemoryCache } from '@apollo/client';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

const client = new ApolloClient({
	uri: `${API_URL}/graphql`,
	cache: new InMemoryCache(),
	defaultOptions: {
		query: {
			fetchPolicy: 'no-cache',
		},
	},
});

export default client;
