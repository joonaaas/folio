import Container from './Container';
import ContainX from './ContainX';
import Checklist from './Checklist';

const Services = () => {
	return (
		<section className='border-b-3'>
			<Container>
				<div className='flex justify-between'>
					<p>servi·ces</p>
					<p>001</p>
				</div>
				<ContainX>
					<div className='pb-12 mt-10 md:flex xxs:pb-24 xxs:mt-20 sm:mt-24 sm:pb-28'>
						<div className='border-opacity-40 md:w-2/12 md:border-t-3 md:mt-4 md:mr-3.5'></div>
						<div className=''>
							<p className='pb-4 text-xl'>
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
