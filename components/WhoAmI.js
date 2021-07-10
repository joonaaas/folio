import Image from 'next/image';
import profilePic from '../public/images/me.jpg';
import Container from './Container';
import ContainX from './ContainX';
import wave from '../public/images/wave.png';

const WhoAmI = () => {
	return (
		<section className='border-b-3'>
			<Container>
				<div className='relative w-full py-10 sm:flex sm:justify-between sm:items-center sm:py-16 md2:h-500 md2:flex md2:items-center'>
					<ContainX>
						<div className='relative z-20 sm:absolute sm:top-28 '>
							<h1 className='text-5xl font-heading md:text-5.5xl'>
								Jonas Alolino
							</h1>
							<p className='text-4xl text-center text-green-dark sm:leading-relaxed md:leading-loose md:ml-8 md:text-4.5xl'>
								shopify theme
							</p>
							<p className='text-4xl text-right text-green-dark md:text-4.5xl '>
								developer
							</p>

							<div className='hidden mt-8 ml-4 sm:block'>
								<div className='flex items-center justify-center w-24 h-24 p-6 rounded-full border-3'>
									<Image src={wave} alt='wave' />
								</div>
							</div>
						</div>

						<div className='flex items-center justify-center px-4 pt-4 pb-2.5 sm:w-full sm:justify-end sm:pb-8 xxs:pb-20 '>
							<div className='flex items-center justify-center filter drop-shadow-lg w-260 xxs:w-280 xxs:mt-6 sm:mt-11 md:w-300 md2:w-320 md2:mb-8 opacity-10'>
								<Image
									src={profilePic}
									alt='Picture of Me'
									priority
									className='rounded'
								/>
							</div>
						</div>
					</ContainX>
				</div>
			</Container>
		</section>
	);
};

export default WhoAmI;
