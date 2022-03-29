import { motion } from 'framer-motion';

import { Hero } from '@components/Hero/Hero';
import { heroMotion } from '@components/Hero/Hero.motion';
import { Product } from '@components/Product/Product';

import withTransition from 'HOC/withTransition';

const Whiskey = () => {
	return (
		<main>
			<Hero>
				<motion.p variants={heroMotion} initial="hidden" animate="fade" className="h5">
					Our Whiskey
				</motion.p>
				<motion.h1 variants={heroMotion} initial="hidden" animate="fade" className="h2">
					Earned excellence in every expression.
				</motion.h1>
				<motion.p variants={heroMotion} initial="hidden" animate="fade" className="h5">
					Discover the Hayashi family of Ryukyu whisky made from pure indica rice.
				</motion.p>
			</Hero>
			<Product />
			<Product />
			<Product />
		</main>
	);
};

export default withTransition(Whiskey);
