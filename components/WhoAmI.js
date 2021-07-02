import Image from 'next/image';
import profilePic from '../public/images/me.jpg';
import Section from './Section';

const WhoAmI = () => {
	return (
		<Section>
			<div className='pt-10'>
				<h1 className='text-5xl font-heading'>Jonas Alolino</h1>
				<p className='text-4xl text-center text-green'>shopify theme</p>
				<p className='text-4xl text-right text-green'>developer</p>
			</div>
			<div className='flex items-center justify-center px-4 pt-4 pb-14'>
				<div className='relative flex items-center justify-center transform rotate-6 h-320 w-260 opacity-5'>
					<Image
						src={profilePic}
						alt='Picture of me'
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
