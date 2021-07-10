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
					<div className='py-10 md:flex sm:py-16 md2:py-20'>
						<div className='border-opacity-40 md:w-2/12 md:border-t-3 md:mt-4 md:mr-3.5'></div>
						<div className='text-xl md:text-2xl'>
							<p className='pb-4 '>
								I&apos;m a <span className='font-heading'>front-end</span> web
								developer who builds & customize{' '}
								<span className='text-green-dark'>Shopify Theme</span> for
								online entrepreneurs to help establish a better personal brand.
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
