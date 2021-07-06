import Container from './Container';
import Image from 'next/image';
import samp1Mob from '../public/images/sample-1-mob.png';
import samp1Desk from '../public/images/sample-1-desk.png';
import ContainX from './ContainX';
const Sample = () => {
	return (
		<section className='border-b-3'>
			<Container>
				<div className='flex justify-between'>
					<p>sam·ple</p>
					<p>002</p>
				</div>
				<div>
					{/* Mob */}
					<div className='flex items-center justify-center mt-10 mb-6 filter drop-shadow-lg sm:hidden'>
						<Image src={samp1Mob} alt='' objectFit='contain' priority />
					</div>
					{/* Desk */}
					<div className='items-center justify-center hidden mx-4 mt-10 mb-6 filter drop-shadow-lg sm:flex'>
						<Image src={samp1Desk} alt='' objectFit='contain' priority />
					</div>

					<ContainX>
						<div className='flex items-center justify-between pb-10 '>
							<div>
								<a href='https://lets-make-store.myshopify.com' className=''>
									<h2 className='text-xl font-heading xxs:text-2xl'>
										Nike Clone • From Scratch
									</h2>
								</a>
								<a
									href='https://lets-make-store.myshopify.com'
									target='_blank'
									rel='noreferrer'
									className='hidden text-xs text-green-dark font-link xxs:block'>
									lets-make-store.myshopify.com
								</a>
								<p className='text-base font-link text-gray'>
									to unlock: jonas
								</p>
							</div>
							<div>
								<a
									href='https://lets-make-store.myshopify.com'
									target='_blank'
									rel='noreferrer'
									className='flex items-center justify-center p-3 border-2 rounded-full'>
									<Image
										src='/images/rocket.png'
										alt=''
										width={36}
										height={36}
									/>
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
