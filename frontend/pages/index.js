// import { gql } from '@apollo/client';
// import ReactMarkdown from 'react-markdown';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

// import client from '@lib/apollo';
import withTransition from 'HOC/withTransition';
import Image from 'next/image';

import styles from '@styles/pages/Home.module.css';
import { Slide } from '@components/Slide/Slide';
import { Button } from '@components/Button/Button';
import { HoverLinks } from '@components/HoverLinks/HoverLinks';

// prettier-ignore
const Home = (props) => {
	const { scrollYProgress } = useViewportScroll();

	const slide1Anim = useTransform(scrollYProgress, [0.33, 0.385, 0.4], [0, 1, 0]);
	const slide2Anim = useTransform(scrollYProgress, [0.4, 0.45, 0.495], [0, 1, 0]);
	const slide3AnimScale = useTransform(scrollYProgress, [0.4, 0.5, 0.575], [0.6, 1, 1]);
	const slide3AnimY = useTransform(scrollYProgress, [0.55, 0.605, 0.66], [0, 0, -400]);
	const slide4Anim = useTransform(scrollYProgress, [0.66, 0.715, 0.77], [0, 1, 0]);
	const slide5Anim1 = useTransform(scrollYProgress, [0.77, 0.77, 0.88], [0, 0, -250]);
	const slide5Anim2 = useTransform(scrollYProgress, [0.77, 0.77, 0.88], [0, 0, -70]);
	const slide5Anim3 = useTransform(scrollYProgress, [0.77, 0.77, 0.88], [0, 0, -150]);

	const HomeContent = () => (
		<main>
			{/* <ReactMarkdown children={homepage.attributes.content} /> */}
			<Slide>
				<div className={`${styles.hero} ${styles['first']}`}>
					<motion.div className={styles['cloud']}></motion.div>
					<div className="container">
						<div className={styles['content']}>
							<h2>The Modern Expression of an Ancient Spirit</h2>
						</div>
						<motion.div className={styles['bottle']}>
							<Image alt="" src="/images/bottle02.png" priority layout="fixed" width={296} height={745} />
						</motion.div>
					</div>
					<div className={styles['bg']}>
						<Image alt="" src="/images/hills.jpeg" layout="fill" />
					</div>
				</div>
			</Slide>

			<Slide>
				<div className={styles.hero}>
					<div className="container">
						<div className={styles['content']}>
							<h2>Artfully made.</h2>
							<p>Hayashi Master distillers use only the highest quality local ingredients, with a unique dedication to evolving the awamori rice spirit process that’s been passed down through generations.</p>
						</div>
						<motion.div className={styles['bottle']}>
							<Image alt="" src="/images/bottle02.png" layout="fixed" width={296} height={745} />
							<motion.div className={styles['bottle-bg']}>
								<Image alt="" src="/images/grass.png" layout="responsive" width={606} height={850} />
							</motion.div>
						</motion.div>
					</div>
				</div>
			</Slide>

			<Slide>
				<div className={`${styles.hero} ${styles['-swap']}`}>
					<div className="container">
						<div className={styles['content']}>
							<h2>Historically defined.</h2>
							<p>An exemplary whisky of the Ryukyu Islands, Hayashi embodies both the quiet intrigue of Okinawa island life and the rich tradition of Japanese patience and perfection.</p>
						</div>
						<motion.div className={styles['bottle']}>
							<Image alt="" src="/images/bottle02.png" layout="fixed" width={296} height={745} />
							<motion.div className={styles['bottle-bg']}>
								<Image alt="" src="/images/tree.png" layout="responsive" width={1107} height={885} />
							</motion.div>
						</motion.div>
					</div>
				</div>
			</Slide>

			<Slide bg="dark" className="first">
				<motion.div className="container -sm" style={{ opacity: slide1Anim }}>
					<h3 className="-center">18 generations of mastery, and counting.</h3>
				</motion.div>
			</Slide>

			<Slide bg="dark">
				<motion.div className="container -sm" style={{ opacity: slide2Anim }}>
					<h3 className="-center">Established in 1883, Masahiro Distillery was among the first distilleries in the Okinawa region of Japan.</h3>
				</motion.div>
			</Slide>

			<Slide bg="dark">
				<motion.div style={{ y: slide3AnimY, scale: slide3AnimScale }}>
					<Image alt="" src="https://source.unsplash.com/random/1450x750" layout="responsive" width={1450} height={750} />
				</motion.div>
			</Slide>

			<Slide bg="dark">
				<motion.div className="container -sm -center -pb-l" style={{ opacity: slide4Anim }}>
					<h3> Two centuries later, Hayashi lengthens the legend.</h3>
					<Button href="/whiskey">
						<>
							<span className="arrow">&rarr;</span> See Our Story
						</>
					</Button>
				</motion.div>
			</Slide>

			<Slide bg="dark">
				<motion.div className={`${styles['img-grid']} container -sm -pb-l`}>
					<motion.div style={{ y: slide5Anim1 }}>
						<Image alt="" src="https://source.unsplash.com/random/600x750" layout="responsive" width={600} height={750} />
					</motion.div>
					<motion.div style={{ y: slide5Anim2 }}>
						<Image alt="" src="https://source.unsplash.com/random/600x750" layout="responsive" width={600} height={750} />
					</motion.div>
					<motion.div style={{ y: slide5Anim3 }}>
						<Image alt="" src="https://source.unsplash.com/random/600x750" layout="responsive" width={600} height={750} />
					</motion.div>
				</motion.div>
			</Slide>

			<HoverLinks />
		</main>
	);

	const HomeWithTransition = withTransition(HomeContent);

	return (
		<HomeWithTransition {...props} />
	);
};

// export async function getStaticProps() {
// 	const { data: homepageRes } = await client.query({
// 		query: gql`
// 			query getHomepage {
// 				homepage {
// 					data {
// 						attributes {
// 							content
// 						}
// 					}
// 				}
// 			}
// 		`,
// 	});

// 	return {
// 		props: {
// 			homepage: homepageRes.homepage.data,
// 		},
// 		revalidate: 1,
// 	};
// }

export default Home;
