import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import App from 'next/app';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';

import { Header } from '@components/Header/Header';
import { Footer } from '@components/Footer/Footer';
import Gate from '@components/Gate/Gate';

import { getStrapiMedia } from '@lib/media';
import { fetchAPI } from '@lib/api';

import '@styles/globals.css';

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps, router }) {
	const { route } = router;
	const { global } = pageProps;
	const [isLegal, setIsLegal] = useState('');

	useEffect(() => {
		setIsLegal(localStorage.getItem('ageVerified'));
	}, []);

	useEffect(() => {
		localStorage.setItem('ageVerified', isLegal);
	}, [isLegal]);

	const MotionGate = motion(Gate);

	return (
		<>
			<Head>
				<link rel="shortcut icon" href={getStrapiMedia(global.attributes.favicon.data.attributes.url)} />
				<link rel="stylesheet" href="https://use.typekit.net/wzt1kkc.css" />
			</Head>
			<GlobalContext.Provider value={global.attributes}>
				{isLegal === 'true' && (
					<Header initial={false} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} />
				)}
				{isLegal === 'true' ? (
					<AnimatePresence exitBeforeEnter>
						<Component {...pageProps} key={route} />
					</AnimatePresence>
				) : (
					<MotionGate
						key="gate"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}
						setIsLegal={setIsLegal}
						isLegal={isLegal}
					/>
				)}
				{isLegal === 'true' && (
					<Footer initial={false} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} />
				)}
			</GlobalContext.Provider>
		</>
	);
}

MyApp.propTypes = {
	Component: PropTypes.func,
	pageProps: PropTypes.object,
	router: PropTypes.object,
};

MyApp.getInitialProps = async (ctx) => {
	const appProps = await App.getInitialProps(ctx);
	// We don't use GraphQL here because by design we cannot pass _all_ global attributes down as context.
	// With that, we'll maintain use of a normal JS fetch call here, and pass the options needed for the favicon.
	const globalRes = await fetchAPI('/global', {
		populate: {
			favicon: '*',
		},
	});

	return { ...appProps, pageProps: { global: globalRes.data } };
};

export default MyApp;
