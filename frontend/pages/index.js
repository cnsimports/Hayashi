// import { gql } from '@apollo/client';
// import ReactMarkdown from 'react-markdown';
import { useEffect, useRef } from 'react';
import { gsap } from '@gsap/business';
import { ScrollTrigger } from '@gsap/business/dist/ScrollTrigger';

// import client from '@lib/apollo';
import Image from 'next/image';

import { Slide } from '@components/Slide/Slide';
import { Button } from '@components/Button/Button';
import { HoverLinks } from '@components/HoverLinks/HoverLinks';

import styles from '@styles/pages/Home.module.css';

gsap.registerPlugin(ScrollTrigger);

// prettier-ignore
const Home = (props) => {
	const omegawrapRef = useRef();
	const bottleRef = useRef();
	const videoRef = useRef();
	const slidesRef = useRef();
	const slideOneRef = useRef();
	const oneBgRef = useRef();
	const oneTitleRef = useRef();
	const oneCloudsRef= useRef();

	const once = (el, event, fn, opts) => {
		const onceFn = () => {
			el.removeEventListener(event, onceFn);
			fn.apply(this);
		};
		el.addEventListener(event, onceFn, opts);
		return onceFn;
	}

	useEffect(() => {
		if (typeof window !== "undefined") {
			gsap.registerPlugin(ScrollTrigger);
		}

		const slides = gsap.utils.toArray('.slide');
		const omegaTl = gsap.timeline();
		const bottleScrubTl = gsap.timeline();
		const cloudTl = gsap.timeline();

		once(document.documentElement, 'touchstart', () => {
			videoRef.current.play();
			videoRef.current.pause();
		});

		once(videoRef.current, 'loadedmetadata', () => {
			bottleScrubTl
				.fromTo(
					videoRef.current,
					{ currentTime: 0 },
					{ currentTime: videoRef.current.duration, duration: 2.75 },
					0
				)
				.to(videoRef.current, { x: '-50%', y: 0, rotate: 0, delay: 1.5 }, 1);

			ScrollTrigger.create({
				trigger: slidesRef.current,
				start: 'top top+=70',
				end: 'bottom bottom-=198',
				pin: videoRef.current,
				pinSpacing: false,
				scrub: true,
				animation: bottleScrubTl
			});
		});

		cloudTl.to(oneCloudsRef.current, { autoAlpha: 0 });

		ScrollTrigger.create({
			trigger: slidesRef.current,
			start: 'top top+=70',
			end: "+=100%",
			pin: oneCloudsRef.current,
			scrub: 1,
			animation: cloudTl,
		})

		slides.forEach((slide, i) => {
			const title = slide.querySelector('.title');
			const content = slide.querySelector('.content');
			const bottleBg = slide.querySelector('.bottle-bg');
			const slideTl = gsap.timeline();
			const tlDelay = i === 0 ? 2 : i;

			slideTl
				.from(title, { autoAlpha:  i === 0 ? 1 : 0, filter: 'blur(6px)', yPercent: i === 0 ? 0 : -100, ease: 'power2.out', duration: 2 })
				.from(content, { autoAlpha: 0, filter: 'blur(6px)', yPercent: -25, ease: 'power2.out', duration: 2 })
				.from(bottleBg, { autoAlpha: 0, filter: 'blur(6px)', ease: 'power2.out', duration: 2 })
				.to(slide, { autoAlpha: i === slides.length - 1 ? 1 : 0, filter: i === slides.length - 1 ? '' : 'blur(6px)', duration: 2, delay: 2})
			
			ScrollTrigger.create({
				trigger: slide,
				start: 'top top+=70',
				pin: slide,
				scrub: true,
				animation: slideTl,
			});
		});

		// slideWrapTl.to('body', { backgroundColor: 'var(--c-dark)', ease: 'power2.out' });

		omegaTl
			.to(omegawrapRef.current, { filter: 'blur(100px)', autoAlpha: 0 });

		ScrollTrigger.create({
			animation: omegaTl,
			trigger: '.first',
			start: 'top center',
			scrub: true,
		});

		const bodyTl = gsap.timeline();
		bodyTl.to('body', { backgroundColor: '#231f20', ease: 'linear' });

		ScrollTrigger.create({
			animation: bodyTl,
			trigger: '.first',
			start: 'top center',
			end: 'center center',
			scrub: true,
		});
	}, []);

	const HomeContent = () => (
		<main>
			{/* <ReactMarkdown children={homepage.attributes.content} /> */}

			<div ref={oneCloudsRef}  className={styles['cloud']}></div>

			<div ref={omegawrapRef} className="omegawrap">
				<div ref={bottleRef} className={`${styles['bottle-scrub']} bottle-scrub`}>
					<video ref={videoRef} loop muted controls={false}>
						{/* ffmpeg -i Transparent-Final_1.mov -c:v libvpx-vp9 -b:v 2M -crf 20 -g 1 -auto-alt-ref 0 output.webm */}
						<source src="/images/bottle_spin.webm" />
					</video>
				</div>

				<div className={styles['slides']} ref={slidesRef}>
					<Slide ref={slideOneRef} className="slide">
						<div className={`${styles['first']}`}>
							<div className="container">
								<div ref={oneTitleRef} className={styles['content']}>
									<h2 className="title">The Modern Expression of an Ancient Spirit</h2>
								</div>
							</div>
							<div ref={oneBgRef} className={styles['bg']}>
								<Image priority alt="" src="/images/hills.jpeg" layout="fill" />
							</div>
						</div>
					</Slide>

					<Slide className="slide">
						<div className="container">
							<div className={styles['content']}>
								<h2 className="title">Artfully made.</h2>
								<p className="content">Hayashi Master distillers use only the highest quality local ingredients, with a unique dedication to evolving the awamori rice spirit process that’s been passed down through generations.</p>
							</div>
							<div className="bottle-bg">
								<Image alt="" src="/images/grass.png" layout="responsive" width={606} height={850} />
							</div>
						</div>
					</Slide>

					<Slide className={`slide ${styles['-swap']}`}>
						<div className="container">
							<div className={styles['content']}>
								<h2 className="title">Historically defined.</h2>
								<p className="content">An exemplary whisky of the Ryukyu Islands, Hayashi embodies both the quiet intrigue of Okinawa island life and the rich tradition of Japanese patience and perfection.</p>
							</div>
							<div className="bottle-bg">
								<Image alt="" src="/images/tree.png" layout="responsive" width={1107} height={885} />
							</div>
						</div>
					</Slide>

					<Slide full className="slide">
						<div className="container">
							<div className={`${styles['content']} ${styles['-bottle-land']}`}>
								<h2 className="title">An exemplary triad of Ryukyu tradition.</h2>
							</div>
						</div>
					</Slide>
				</div>
			</div>
			
			{/* <div ref={darkCoverRef} className="dark-cover"></div> */}

			<Slide bg="dark" className="first">
				<div className="container -sm">
					<h3 className="-center">18 generations of mastery, and counting.</h3>
				</div>
			</Slide>

			<Slide bg="dark">
				<div className="container -sm">
					<h3 className="-center">Established in 1883, Masahiro Distillery was among the first distilleries in the Okinawa region of Japan.</h3>
				</div>
			</Slide>

			<Image alt="" src="https://source.unsplash.com/random/1450x750" layout="responsive" width={1450} height={750} />

			<Slide bg="dark">
				<div className="container -sm -center -pb-l">
					<h3> Two centuries later, Hayashi lengthens the legend.</h3>
					<Button href="/whiskey">
						<>
							<span className="arrow">&rarr;</span> See Our Story
						</>
					</Button>
				</div>
			</Slide>

			<Slide bg="dark">
				<div className={`${styles['img-grid']} container -sm -pb-l`}>
					<div>
						<Image alt="" src="https://source.unsplash.com/random/600x750" layout="responsive" width={600} height={750} />
					</div>
					<div>
						<Image alt="" src="https://source.unsplash.com/random/600x750" layout="responsive" width={600} height={750} />
					</div>
					<div>
						<Image alt="" src="https://source.unsplash.com/random/600x750" layout="responsive" width={600} height={750} />
					</div>
				</div>
			</Slide>

			<HoverLinks />
		</main>
	);

	const HomeWithTransition = HomeContent;

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
