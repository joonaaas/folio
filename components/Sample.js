import Container from './Container';
import Image from 'next/image';
import samp1Mob from '../public/images/sample-1-mob.png';
import samp1Desk from '../public/images/sample-1-desk.png';
import rocket from '../public/images/rocket.png';
import ContainX from './ContainX';

const Sample = () => {
	return (
		<section className='border-b-3'>
			<Container>
				<div className='flex justify-between px-2'>
					<p>sam·ple</p>
					<p>002</p>
				</div>
				<div className='py-10 sm:py-16 md2:py-20'>
					{/* Mob */}
					<div className='flex items-center justify-center px-4 filter drop-shadow-lg sm:hidden'>
						<Image src={samp1Mob} alt='' objectFit='contain' priority />
					</div>
					{/* Desk */}
					<ContainX>
						<div className='items-center justify-center hidden mx-4 filter drop-shadow-lg sm:flex'>
							<Image src={samp1Desk} alt='' objectFit='contain' priority />
						</div>
					</ContainX>

					<ContainX>
						<div className='flex items-center justify-between pt-4 sm:pt-8'>
							<div>
								<a href='https://lets-make-store.myshopify.com' className=''>
									<h2 className='text-xl font-heading sm:text-3xl'>
										Nike Clone • From Scratch
									</h2>
								</a>
								<a
									href='https://lets-make-store.myshopify.com'
									target='_blank'
									rel='noreferrer'
									className='hidden mb-1 text-xs text-green-dark font-link sm:block'>
									lets-make-store.myshopify.com
								</a>
								<p className='text-base font-link text-gray'>
									to unlock: jonas
								</p>
							</div>
							<div className='ml-2'>
								<a
									href='https://lets-make-store.myshopify.com'
									target='_blank'
									rel='noreferrer'
									className='flex items-center justify-center w-16 h-16 p-4 rounded-full border-3 sm:w-20 sm:h-20'>
									<Image src={rocket} alt='rocket' />
								</a>
							</div>
						</div>
					</ContainX>
				</div>
			</Container>
		</section>
	);
};

export default Sample;
