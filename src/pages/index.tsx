import { NextPage } from 'next';
import Layout from '../components/Layout';
import SEO from '../components/seo';

const Home: NextPage = () => {
	return (
		<Layout>
			<SEO />
			<h1 className="text-3xl font-bold underline">Hello World</h1>
		</Layout>
	);
};

export default Home;
