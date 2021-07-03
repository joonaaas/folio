import Section from './Section';
import Image from 'next/image';
import sampleImg from '../public/images/sample.png';

const Sample = () => {
	return (
		<Section>
			<div className='flex justify-between'>
				<p>sam·ple</p>
				<p>002</p>
			</div>
			<div className='flex items-center justify-center mt-10 mb-6 filter drop-shadow-lg'>
				<Image src={sampleImg} alt='' objectFit='contain' priority />
			</div>
			<div className='flex items-center justify-between mx-3 mb-10'>
				<div>
					<a href='https://lets-make-store.myshopify.com' className=''>
						<h2 className='text-xl font-heading'>Nike Clone • From Scratch</h2>
					</a>
					<a
						href='https://lets-make-store.myshopify.com'
						target='_blank'
						rel='noreferrer'
						className='hidden text-xs text-green font-link'>
						lets-make-store.myshopify.com
					</a>
					<p className='text-base font-link text-gray'>to unlock: jonas</p>
				</div>
				<div>
					<a
						href='https://lets-make-store.myshopify.com'
						target='_blank'
						rel='noreferrer'
						className='flex items-center justify-center p-3 border-2 rounded-full'>
						<Image src='/images/rocket.png' alt='' width={36} height={36} />
					</a>
				</div>
			</div>
		</Section>
	);
};

export default Sample;
