import Image from 'next/image';
import profilePic from '../public/images/me.jpg';
import Container from './Container';
import ContainX from './ContainX';
import wave from '../public/images/wave.png';

const WhoAmI = () => {
	return (
		<section className='border-b-3'>
			<Container>
				{/* py-10 - sm:py-16 */}
				<div className='relative w-full py-10 sm:flex sm:py-16 sm:justify-between sm:items-center md2:py-20 md2:flex md2:items-center lg:py-28'>
					<ContainX>
						<div className='relative z-20 sm:absolute sm:top-24 md2:top-28 lg:top-40'>
							<h1 className='text-4xl ml-2 xxs:text-5xl font-heading md:text-5.5xl lg:text-7xl xxs:ml-4 sm:ml-0 xs:ml-8'>
								Jonas Alolino
							</h1>
							<p className='text-3xl text-center text-green-dark sm:leading-relaxed md:leading-loose md:ml-8 md:text-4.5xl lg:text-6xl lg:mt-4 xxs:text-4xl ml-4 '>
								shopify theme
							</p>
							<p className='text-3xl xxs:text-4xl text-right text-green-dark md:text-4.5xl lg:text-6xl lg:mt-4 md2:mr-8 mr-6 xs:mr-8'>
								developer
							</p>

							<div className='hidden mt-8 ml-4 sm:block lg:ml-8 lg:mt-10'>
								<div className='flex items-center justify-center w-24 h-24 p-4 rounded-full border-3'>
									<Image src={wave} alt='wave' />
								</div>
							</div>
						</div>

						<div className='flex items-center justify-center pt-4 pb-2.5 sm:w-full sm:justify-end sm:p-0 px-4'>
							<div className='filter drop-shadow-lg w-300 md2:w-320 lg:w-400'>
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
