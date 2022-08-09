import { useEffect, useRef } from 'react';
import { gsap } from '@gsap/business';
import { ScrollTrigger } from '@gsap/business/dist/ScrollTrigger';
import Image from 'next/image';
import PropTypes from 'prop-types';

import client from '@lib/apollo';
import { QUERY_HOME } from '@lib/queries';
import { getStrapiMedia } from '@lib/media';

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
		const mql = window.matchMedia('(max-width: 1023px)');

		if (typeof window !== "undefined") {
			gsap.registerPlugin(ScrollTrigger);
		}

		const slides = gsap.utils.toArray('.slide');
		const darkSlides = gsap.utils.toArray('.ds');
		const bodyTl = gsap.timeline();
		const cloudTl = gsap.timeline();
		const bottleScrubTl = gsap.timeline();
		const omegaTl = gsap.timeline();

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
				.to(videoRef.current, { x: '-50%', y: 0, rotate: 0, delay: 1 }, 1);

			ScrollTrigger.create({
				trigger: slidesRef.current,
				start: 'top top+=70',
				end: 'bottom bottom-=10%',
				pin: videoRef.current,
				pinSpacing: false,
				scrub: true,
				animation: bottleScrubTl
			});
		});

		if (mql.matches) {
			const bottleWrapTlOut = gsap.timeline();
			const bottleWrapTlIn = gsap.timeline();

			bottleWrapTlOut
				.to(bottleRef.current, { autoAlpha: 0 });

			ScrollTrigger.create({
				trigger: slidesRef.current,
				start: 'bottom center',
				animation: bottleWrapTlOut,
				onLeave: () => {
					bottleWrapTlIn
					.fromTo(bottleRef.current, { autoAlpha: 0, }, { autoAlpha: 1 });

					ScrollTrigger.create({
						trigger: slides[slides.length - 1],
						start: 'top bottom',
						animation: bottleWrapTlIn,
						toggleActions: 'play none none reverse'
					});
				}
			});
		}

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

			slideTl
				.from(title, { autoAlpha:  i === 0 ? 1 : 0, filter: 'blur(6px)', yPercent: i === 0 ? 0 : -100, ease: 'power2.out', duration: 2 })
				.from(content, { autoAlpha: 0, filter: 'blur(6px)', yPercent: -25, ease: 'power2.out', duration: 2 })
				.from(bottleBg, { autoAlpha: 0, filter: 'blur(6px)', ease: 'power2.out', duration: 2 })
				.to(slide, { autoAlpha: i === slides.length - 1 ? 1 : 0, filter: i === slides.length - 1 ? '' : 'blur(6px)', duration: 2 })

			ScrollTrigger.create({
				trigger: slide,
				start: 'top top+=70',
				end: '+=500%',
				pin: slide,
				scrub: true,
				animation: slideTl,
			});
		});

		omegaTl
			.to(omegawrapRef.current, { filter: 'blur(100px)', autoAlpha: 0 });

		ScrollTrigger.create({
			animation: omegaTl,
			trigger: '.first',
			start: 'top center',
			scrub: true,
		});

		bodyTl.to('body', { backgroundColor: '#231f20', ease: 'linear' });

		ScrollTrigger.create({
			animation: bodyTl,
			trigger: '.first',
			start: 'top center',
			end: 'center center',
			scrub: true,
		});

		darkSlides.forEach((darkSlide) => {
			const title = darkSlide.querySelector('.title');
			const darkSlideTl = gsap.timeline();
			
			darkSlideTl
				.from(title, { autoAlpha: 0, filter: 'blur(6px)', ease: 'power2.out', duration: 4 })
				.to(title, { autoAlpha: 0, filter: 'blur(6px)', ease: 'power2.out', duration: 4 })
			
			ScrollTrigger.create({
				trigger: darkSlide,
				pin: title,
				scrub: true,
				animation: darkSlideTl,
			});
		});
	}, []);

	const HomeContent = ({ home }) => {
		const { home_fields, link_hover } = home.attributes;
		return (
			<main>
				<div ref={oneCloudsRef} className={styles['cloud']}></div>

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
										<h2 className="title">{home_fields.slide_1_title}</h2>
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
									<h2 className="title">{home_fields.slide_2_title}</h2>
									<p className="content">{home_fields.slide_2_content}</p>
								</div>
								<div className="bottle-bg">
									<Image alt={home_fields.slide_2_image.data.attributes.alternativeText} src={getStrapiMedia(home_fields.slide_2_image.data.attributes.url)} layout="intrinsic" width={396} height={634} />
								</div>
							</div>
						</Slide>

						<Slide className={`slide ${styles['-swap']}`}>
							<div className="container">
								<div className={styles['content']}>
									<h2 className="title">{home_fields.slide_3_title}</h2>
									<p className="content">{home_fields.slide_3_content}</p>
								</div>
								<div className="bottle-bg">
									<Image alt={home_fields.slide_3_image.data.attributes.alternativeText} src={getStrapiMedia(home_fields.slide_3_image.data.attributes.url)} layout="intrinsic" width={688} height={497} />
								</div>
							</div>
						</Slide>

						<Slide full className="slide">
							<div className="container">
								<div className={`${styles['content']} ${styles['-bottle-land']}`}>
									<h2 className="title">{home_fields.slide_4_title}</h2>
								</div>
							</div>
						</Slide>
					</div>
				</div>

				<div className={`${styles['dark-slides']} js-dark-slides`}>
					<Slide bg="dark" className="first ds">
						<div className="container -sm">
							<h3 className="-center title">{home_fields.slide_5_title}</h3>
						</div>
					</Slide>

					<Slide bg="dark" className="ds">
						<div className="container -sm">
							<h3 className="-center title">{home_fields.slide_6_title}</h3>
						</div>
					</Slide>
				</div>

				<Image alt={home_fields.slide_7_image.data.attributes.alternativeText} src={getStrapiMedia(home_fields.slide_7_image.data.attributes.url)} layout="responsive" width={home_fields.slide_7_image.data.attributes.width} height={home_fields.slide_7_image.data.attributes.height} />

				<Slide bg="dark">
					<div className="container -sm -center -pb-l">
						<h3>{home_fields.slide_8_title}</h3>
						<Button href={home_fields.slide_8_button.URL}>
							<>
								<span className="arrow">&rarr;</span> {home_fields.slide_8_button.Text}
							</>
						</Button>
					</div>
				</Slide>

				<Slide bg="dark">
					<div className={`${styles['img-grid']} container -sm -pb-l`}>
						{home_fields.slide_9_image.data.map((image) => (
							<div key={image.id}>
								<Image alt={image.attributes.alternativeText} src={getStrapiMedia(image.attributes.url)} layout="responsive" width={600} height={750} />
							</div>
						))}
					</div>
				</Slide>

				<HoverLinks title={link_hover.title} links={link_hover.link_hover_item} />
			</main>
		);
	}

	const HomeWithTransition = HomeContent;

	return (
		<HomeWithTransition {...props} />
	);
};

Home.propTypes = {
	home: PropTypes.object.isRequired,
};

export async function getStaticProps() {
	const { data: homepageRes } = await client.query({
		query: QUERY_HOME,
	});

	return {
		props: {
			home: homepageRes.homepage.data,
		},
		revalidate: 10,
	};
}

export default Home;
