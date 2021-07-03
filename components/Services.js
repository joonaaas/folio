import Section from './Section';
import List from './List';
import { useState } from 'react';

const Services = () => {
	const [open, setOpen] = useState(false);
	return (
		<Section>
			<div className='flex justify-between'>
				<p>servi·ces</p>
				<p>001</p>
			</div>
			<div className='mx-2 mt-10 mb-12'>
				<p className='pb-4 text-xl'>
					I&apos;m a <span className='font-heading'>front-end</span> web
					developer who builds & customize{' '}
					<span className='text-green-dark'>Shopify Theme</span> for online
					entrepreneurs to help establish a better personal brand.
				</p>
				<ul
					className={`relative overflow-hidden transition-all ease-in-out duration-200 ${
						open ? 'h-224' : 'h-132'
					}`}
					onClick={() => {
						setOpen(true);
					}}>
					<List content='Troubleshooting. ' />
					<List content='PSD to HTML/Shopify.' />
					<List content='Responsive Design.' />
					<List content='UX/UI Enhancement.' />
					<List content='Theme Implementation.' />
					<List content='Shopify Theme Development.' />
					<List content='Logo/Image Enhancement.' />
					<List content='App Integration.' />
					<div
						className={`absolute top-0 left-0 w-full h-full transition-all ease-out bg-gradient-to-t from-white to-transparent  ${
							open ? 'opacity-5' : 'opacity-100'
						}`}></div>
				</ul>
			</div>
		</Section>
	);
};

export default Services;
