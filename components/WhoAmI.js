import Image from 'next/image';
import profilePic from '../public/images/me.jpg';
import Container from './Container';
import ContainX from './ContainX';

const WhoAmI = () => {
	return (
		<section className='border-b-3'>
			<Container>
				<div className='relative w-full sm:flex sm:justify-between sm:h-440 md2:h-500 md2:flex md2:items-center'>
					<ContainX>
						<div className='relative z-20 pt-10 sm:absolute sm:top-8 '>
							<h1 className='text-5xl font-heading md:text-5.5xl'>
								Jonas Alolino
							</h1>
							<p className='text-4xl text-center text-green-dark sm:leading-relaxed md:leading-loose md:ml-8 md:text-4.5xl'>
								shopify theme
							</p>
							<p className='text-4xl text-right text-green-dark md:text-4.5xl '>
								developer
							</p>
						</div>

						<div className='flex items-center justify-center px-4 pt-4 pb-16 sm:w-full sm:justify-end sm:pb-8 xxs:pb-20 '>
							<div className='flex items-center justify-center mt-4 mb-2 filter drop-shadow-lg h-320 w-260 xxs:w-280 xxs:mt-6 sm:mt-11 md:w-300 md2:w-320 md2:mb-8'>
								<Image
									src={profilePic}
									alt='Picture of Me'
									objectFit='contain'
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
