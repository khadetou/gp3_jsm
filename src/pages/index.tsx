import { NextPage } from 'next';
import { Layout, SEO, Article, Brand, Cta, Feature, Navbar } from '../components/index';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from '../containers';

const Home: NextPage = () => {
	return (
		<Layout>
			<SEO />
			<div className="bg-gradient-bg hover:animate-scale-up-center">
				<Navbar />
				<Header />
			</div>
			<Brand />
			<WhatGPT3 />
			<Features />
			<Possibility />
			<Cta />
			<Blog />
			<Footer />
		</Layout>
	);
};

export default Home;
