import Section from './Section';
import List from './List';

const Services = () => {
	return (
		<Section>
			<div className='flex justify-between'>
				<p>servi·ces</p>
				<p>001</p>
			</div>
			<div className='px-2 pt-10 pb-10'>
				<p className='pb-4 text-xl'>
					I&apos;m a <span className='font-heading'>front-end</span> web
					developer who builds & customize{' '}
					<span className='text-green'>Shopify Theme</span> for online
					entrepreneurs to help establish a better personal brand.
				</p>
				<ul className='relative overflow-hidden h-132'>
					<List content='Troubleshooting. Bug/Error fixes' />
					<List content='PSD/Figma to HTML/Shopify' />
					<List content='Responsive Design' />
					<List content='UX/UI Enhancement' />
					<List content='Theme Implementation' />
					<List content='Shopify Theme Development' />
					<List content='Logo/Image Enhancement' />
					<List content='App Integration' />
					<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white to-transparent'></div>
				</ul>
			</div>
		</Section>
	);
};

export default Services;
