import Container from './Container';
import ContainX from './ContainX';
import Checklist from './Checklist';

const Services = () => {
	return (
		<section className='border-b-3'>
			<Container>
				<div className='flex justify-between px-2'>
					<p>servi·ces</p>
					<p>001</p>
				</div>
				<ContainX>
					<div className='py-10 md:flex sm:py-16 md2:py-20 lg:py-36'>
						<div className='border-opacity-40 md:w-2/12 md:border-t-3 md:mt-4 md:mr-3.5 lg:w-1/4 lg:mt-6'></div>
						<div className='text-lg md:text-2xl lg:text-3xl'>
							<p className='pb-4 leading-relaxed'>
								I&apos;m a <span className='font-heading'>front-end</span> web
								developer + designer specializing in{' '}
								<span className='text-green-dark '>Shopify Themes</span>,
								helping small online stores bringing their designs to life
								efficiently.
							</p>
							<Checklist />
						</div>
					</div>
				</ContainX>
			</Container>
		</section>
	);
};

export default Services;
