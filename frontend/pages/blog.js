import { motion } from 'framer-motion';

import { Hero } from '@components/Hero/Hero';
import { heroMotion } from '@components/Hero/Hero.motion';

import withTransition from 'HOC/withTransition';
import { BlogGrid } from '@components/Blog/BlogGrid';

const Blog = () => {
	return (
		<main>
			<Hero narrow>
				<div className="container">
					<motion.p variants={heroMotion} initial="hidden" animate="fade" className="h5">
						Blog
					</motion.p>
					<motion.h1 variants={heroMotion} initial="hidden" animate="fade" className="h2">
						Whisky education worth your while.
					</motion.h1>
				</div>
				<div className="container -sm">
					<motion.p variants={heroMotion} initial="hidden" animate="fade" className="h5">
						Within the evolving world of Japanese whisky, there&apos;s always more to be learned. Welcome to the
						Japanese whisky blog. We invite you to pour yourself a glass and delve into some of the industries most
						interesting conversations.
					</motion.p>
				</div>
			</Hero>

			<div className="container">
				<BlogGrid />
			</div>
		</main>
	);
};

export default withTransition(Blog);
