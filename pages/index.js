import Header from '../components/Header';
import WhoAmI from '../components/WhoAmI';
import Services from '../components/Services';
import Sample from '../components/Sample';
import Tools from '../components/Tools';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
	return (
		<div className='font-regular'>
			<Header />
			<main className='px-2.5 xs:px-8 md:px-14 md2:px-20 lg:px-28'>
				<WhoAmI />
				<Services />
				<Sample />
				<Tools />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
