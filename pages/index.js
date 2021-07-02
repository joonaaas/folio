import Header from '../components/Header';
import WhoAmI from '../components/WhoAmI';
import Services from '../components/Services';
import Sample from '../components/Sample';

export default function Home() {
	return (
		<div className='font-regular'>
			<Header />
			<main className='px-2.5'>
				<WhoAmI />
				<Services />
				<Sample />
			</main>
		</div>
	);
}
