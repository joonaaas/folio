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
				<div className='relative w-full py-10 sm:flex sm:py-16 sm:justify-between sm:items-center md2:py-20 md2:flex md2:items-center'>
					<ContainX>
						<div className='relative z-20 sm:absolute sm:top-24 md2:top-28'>
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
								<div className='flex items-center justify-center w-24 h-24 p-4 rounded-full border-3'>
									<Image src={wave} alt='wave' />
								</div>
							</div>
						</div>

						<div className='flex items-center justify-center pt-4 pb-2.5 sm:w-full sm:justify-end sm:p-0 px-4'>
							<div className=' filter drop-shadow-lg w-300 md2:w-320 opacity-10'>
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
