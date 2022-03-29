import { motion } from 'framer-motion';

import { Hero } from '@components/Hero/Hero';
import { heroMotion } from '@components/Hero/Hero.motion';

import withTransition from 'HOC/withTransition';
import Image from 'next/image';
import { Button } from '@components/Button/Button';

const Craft = () => {
	return (
		<main>
			<Hero>
				<div className="container -p-m">
					<motion.p variants={heroMotion} initial="hidden" animate="fade" className="h5">
						Our Craft
					</motion.p>
					<motion.h1 variants={heroMotion} initial="hidden" animate="fade" className="h2">
						Where deep tradition
						<br />
						meets exquisite taste.
					</motion.h1>
				</div>
			</Hero>

			<Image alt="" src="https://source.unsplash.com/1440x920" layout="responsive" width={1440} height={820} />

			<Hero>
				<div className="container -p-m">
					<p className="h5 -uppercase">Cultivation</p>
					<h1 className="h2">
						Every whisky begins with a grain. Ours is Japan&apos;s most celebrated: 100% indica rice.
					</h1>
					<p className="h5">
						For centuries rice has been a pillar of culture and cultivation in Japan, and beyond. Transcending the art
						of rice spirits is a true honor, and is treated as such throughout the process.
					</p>
				</div>
			</Hero>

			<Image alt="" src="https://source.unsplash.com/1440x920" layout="responsive" width={1440} height={820} />

			<Hero>
				<div className="container -p-m">
					<p className="h5 -uppercase">Fermentation</p>
					<h1 className="h2">Rice is fermented just as the ancestors did it, with a rare strain of Black Koji.</h1>
					<p className="h5">
						Rice, unlike barley or other whisky-common grains, is not malted. Instead, it ferments with Black Koji
						native to Japan using the same technique passed down through generations of Okinawa people in the making of
						awamori.
					</p>
				</div>
			</Hero>

			<Image alt="" src="https://source.unsplash.com/1440x920" layout="responsive" width={1440} height={820} />

			<Hero>
				<div className="container -p-m">
					<p className="h5 -uppercase">Maturation</p>
					<h1 className="h2">
						This is where the ancient rice spirit very slowly, very delicately becomes a Japanese whisky.
					</h1>
					<p className="h5">
						Hayashi is aged in bourbon casks until it holds just the right warmth and woodiness of a whisky, while also
						inheriting the distinct characteristics of its surroundings. The sultry island air exhilarates maturation
						and ignites the distinct flavor profile that sets Ryukyu whisky apart from the rest.
					</p>
				</div>
			</Hero>

			<Hero>
				<div className="container -p-m">
					<h1 className="h2">Our craft culminates with you.</h1>
					<Button href="/whiskey">
						<>
							<span className="arrow">&rarr;</span> Explore our whiskies
						</>
					</Button>
				</div>
			</Hero>
		</main>
	);
};

export default withTransition(Craft);
