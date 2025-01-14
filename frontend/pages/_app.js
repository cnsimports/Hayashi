import { createContext, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CookieConsent from 'react-cookie-consent';

import App from 'next/app';
import Image from 'next/image';
import Head from 'next/head';
import PropTypes from 'prop-types';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { Header } from '@components/Header/Header';
import { Footer } from '@components/Footer/Footer';
import Gate from '@components/Gate/Gate';
import { Kanji } from '@components/SVG/Kanji';

import styles from '@styles/pageTransition/pageTransition.module.css';

import '@styles/globals.css';
import { QUERY_PRODUCTS } from '@lib/queries';
import client from '@lib/apollo';
import { NextSeo } from 'next-seo';

export const GlobalContext = createContext({});
function MyApp({ Component, pageProps, router, products }) {
	const { route } = router;
	const [isLegal, setIsLegal] = useState('');
	const { seoData = [] } = pageProps;

	useEffect(() => {
		document.body.classList.add('loaded');
		setIsLegal(localStorage.getItem('ageVerified'));
		gsap.registerPlugin(ScrollTrigger);
	}, []);

	useEffect(() => {
		localStorage.setItem('ageVerified', isLegal);
	}, [isLegal]);

	const MotionGate = motion(Gate);

	return (
		<>
			<NextSeo {...seoData} />
			<Head>
				<link rel="stylesheet" href="https://use.typekit.net/wzt1kkc.css" />
			</Head>
			<GlobalContext.Provider value={pageProps}>
				{isLegal === 'true' && (
					<Header initial={false} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} />
				)}
				{isLegal === 'true' ? (
					<AnimatePresence exitBeforeEnter>
						<>
							<motion.div
								className="main-wrapper"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 1.5 }}
								key={route.concat('fade')}
							>
								<Component {...pageProps} />
							</motion.div>
							<motion.div
								key={route.concat('slide-in')}
								className={styles['slide-in']}
								initial={{ y: '100%' }}
								animate={{ y: '100%' }}
								exit={{ y: 0 }}
								transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
								onAnimationStart={() => {
									const header = document.querySelector('.header');
									const footer = document.querySelector('.footer');
									const main = document.querySelector('main');

									document.body.classList.add('hide');
									header?.classList.add('hide');
									footer?.classList.add('hide');
									main?.classList.add('hide');
								}}
							>
								<Kanji width={0} height={0} />
								<div className={styles.kanji}>
									<Image alt="" src="/images/gold-foil.jpeg" priority layout="intrinsic" width={271} height={231} />
								</div>
							</motion.div>
							<motion.div
								key={route.concat('slide-out')}
								className={styles['slide-out']}
								initial={{ opacity: 1 }}
								animate={{ opacity: 0 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 1, delay: 1, ease: [0.87, 0, 0.13, 1] }}
								onAnimationComplete={() => {
									const header = document.querySelector('.header');
									const footer = document.querySelector('.footer');
									const main = document.querySelector('main');

									document.body.classList.remove('hide');
									header?.classList.remove('hide');
									footer?.classList.remove('hide');
									main?.classList.remove('hide');

									// gsap.fromTo(
									// 	'.progress-wrap path',
									// 	{
									// 		drawSVG: 0,
									// 	},
									// 	{
									// 		drawSVG: '100%',
									// 		scrollTrigger: {
									// 			start: 0,
									// 			end: document.body.getBoundingClientRect().height,
									// 			scrub: true,
									// 		},
									// 	}
									// );

									gsap.fromTo(
										'.progress-wrap',
										{
											yPercent: 100,
											autoAlpha: 0,
										},
										{
											yPercent: 0,
											autoAlpha: 1,
											scrollTrigger: {
												start: 5,
												toggleActions: 'play none none reverse',
											},
										}
									);
								}}
							>
								<Kanji width={0} height={0} />
								<div className={styles.kanji}>
									<Image alt="" src="/images/gold-foil.jpeg" priority layout="intrinsic" width={271} height={231} />
								</div>
							</motion.div>
						</>
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
					<>
						<Footer
							initial={false}
							animate={{ opacity: 1 }}
							transition={{ delay: 1, duration: 1 }}
							products={products}
						/>
						<CookieConsent style={{ backgroundColor: 'black' }}>
							This website uses cookies to enhance the user experience.
						</CookieConsent>
					</>
				)}
			</GlobalContext.Provider>
		</>
	);
}

MyApp.getInitialProps = async (appContext) => {
	const appProps = await App.getInitialProps(appContext);
	// const globalRes = await fetchAPI('/global', {
	// 	populate: {
	// 		favicon: '*',
	// 	},
	// });
	const { data: productRes } = await client.query({
		query: QUERY_PRODUCTS,
	});

	return { ...appProps, products: productRes.products.data };
};

MyApp.propTypes = {
	Component: PropTypes.func,
	pageProps: PropTypes.object,
	router: PropTypes.object,
	products: PropTypes.array,
};

export default MyApp;
