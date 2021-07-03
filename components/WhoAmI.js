import Image from 'next/image';
import profilePic from '../public/images/me.jpg';
import Section from './Section';

const WhoAmI = () => {
	return (
		<Section>
			<div className='pt-10'>
				<h1 className='text-5xl font-heading'>Jonas Alolino</h1>
				<p className='text-4xl text-center text-green-dark'>shopify theme</p>
				<p className='pr-2 text-4xl text-right text-green-dark'>developer</p>
			</div>
			<div className='flex items-center justify-center px-4 pt-4 mb-16'>
				<div className='relative flex items-center justify-center mt-4 mb-2 filter drop-shadow-lg h-320 w-260 '>
					<Image
						src={profilePic}
						alt='Picture of Me'
						objectFit='contain'
						priority
						className='rounded'
					/>
				</div>
			</div>
		</Section>
	);
};

export default WhoAmI;
