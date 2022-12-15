import { useEffect, useRef, useState } from 'react';
import { Router, useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion, useTransform, useViewportScroll } from 'framer-motion';

import { getRelativeCoordinates } from '@util/getRelativeCoordinates';

import { Logo } from '@svg/Logo';
import { Menu } from '@svg/Menu';

import { Social } from '@components/Social/Social';

import styles from './Header.module.css';
import { container, item, navContainer } from './Header.motion';

export const Header = () => {
	const router = useRouter();
	const [src, setSrc] = useState(null);
	const [menuOpen, setMenuOpen] = useState(false);
	const [navTransition, setNavTransition] = useState(false);
	const [hoverMenu, setHoverMenu] = useState('');
	const [mousePosition, setMousePosition] = useState({});
	const boxRef = useRef();

	const { scrollYProgress } = useViewportScroll();

	const navAnim = router.pathname.includes('/blog/')
		? useTransform(scrollYProgress, [0, 0.4, 0.44], ['#fff', '#000', '#000'])
		: useTransform(scrollYProgress, [0.75, 0.8, 0.85], ['#000', '#fff', '#fff']);

	Router.events.on('routeChangeStart', () => {
		setMenuOpen(false);
	});

	Router.events.on('routeChangeComplete', (url) => {
		if (url === '/' || router.pathname.includes('/blog/')) {
			setNavTransition(true);
		} else {
			setNavTransition(false);
		}
	});

	useEffect(() => {
		if (router.pathname === '/' || router.pathname.includes('/blog/')) {
			setNavTransition(true);
		} else {
			setNavTransition(false);
		}
	}, []);

	const handleMouseMove = (e) => {
		setMousePosition(getRelativeCoordinates(e, boxRef.current));
	};

	return (
		<motion.div
			className={`${styles.header} ${menuOpen ? styles['-is-open'] : ''} header`}
			style={{ '--c-fade': navTransition ? navAnim : 'var(--c-black)' }}
		>
			<AnimatePresence exitBeforeEnter>
				{menuOpen && (
					<motion.div
						className={styles['nav-bg']}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					/>
				)}
			</AnimatePresence>
			<div className="container">
				<h1>
					{router.asPath !== '/' ? (
						<Link href="/">
							<a className={styles.logo}>
								<span className="screen-reader-text">Hayashi</span>
								<Logo width={147} height={26} />
							</a>
						</Link>
					) : (
						<div className={styles.logo}>
							<span className="screen-reader-text">Hayashi</span>
							<Logo width={147} height={26} />
						</div>
					)}
				</h1>

				<button
					className={styles['menu-activator']}
					onClick={() => setMenuOpen(!menuOpen)}
					aria-expanded={menuOpen}
					aria-controls="menu"
				>
					{menuOpen ? 'Close' : 'Menu'}
					<Menu className={menuOpen ? styles['-active'] : ''} width={25} height={14} />
				</button>
			</div>
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						ref={boxRef}
						onMouseMove={(e) => handleMouseMove(e)}
						variants={navContainer}
						initial="hidden"
						animate="show"
						exit="hidden"
						id="menu"
						className={styles['menu-container']}
					>
						<div className={`${styles.container} container`}>
							<motion.ul
								variants={container}
								initial="hidden"
								animate="show"
								exit="hidden"
								className={styles['primary-nav']}
							>
								<motion.li variants={item}>
									<Link href="/whisky">
										<a
											className="h1"
											onMouseEnter={() => {
												setHoverMenu('whisky');
												setSrc(
													'https://res.cloudinary.com/hayashi-whisky/image/upload/v1663253359/Hayashit_24_Bottle_Top_96c2f7821b.jpg?updated_at=2022-09-15T14:49:24.936Z'
												);
											}}
											onMouseLeave={() => setHoverMenu('')}
										>
											Our Whisky
										</a>
									</Link>
								</motion.li>
								<motion.li variants={item}>
									<Link href="/craft">
										<a
											className="h1"
											onMouseEnter={() => {
												setHoverMenu('craft');
												setSrc(
													'https://res.cloudinary.com/hayashi-whisky/image/upload/v1663253288/Hayashi_8_Mess_Neat_60863cffa9.jpg?updated_at=2022-09-15T14:48:14.665Z'
												);
											}}
											onMouseLeave={() => setHoverMenu('')}
										>
											Our Craft
										</a>
									</Link>
								</motion.li>
								<motion.li variants={item}>
									<Link href="/blog">
										<a
											className="h1"
											onMouseEnter={() => {
												setHoverMenu('blog');
												setSrc(
													'https://res.cloudinary.com/hayashi-whisky/image/upload/v1663253762/9_N7_A2245_3c2702e569.jpg?updated_at=2022-09-15T15:03:47.713Z'
												);
											}}
											onMouseLeave={() => setHoverMenu('')}
										>
											Blog
										</a>
									</Link>
								</motion.li>
							</motion.ul>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 1 }}
								className={styles['menu-footer']}
							>
								<Link href="/contact">
									<a>Contact</a>
								</Link>
								<Social />
							</motion.div>
							<AnimatePresence>
								{hoverMenu !== '' && (
									<motion.div
										className={styles['image-float']}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1, x: mousePosition.centerX * 6, y: mousePosition.centerY * 6 }}
										exit={{ opacity: 0 }}
									>
										<Image alt="" src={src} layout="responsive" height={600} width={450} />
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};
