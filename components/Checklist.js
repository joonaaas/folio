import List from './List';
import { useState } from 'react';

const Checklist = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<ul
				className={`relative overflow-hidden transition-all ease-in-out duration-200 sm:hidden ${
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
				<List content='Platform Migration.' />
				<List content='Image Edit.' />
				<List content='App Integration.' />
				<div
					className={`absolute top-0 left-0 w-full h-full transition-all ease-out bg-gradient-to-t from-white to-transparent  ${
						open ? 'opacity-5' : 'opacity-100'
					}`}></div>
			</ul>
			{/* This will show on 640px */}
			<ul className='hidden sm:flex'>
				<div>
					<List content='Troubleshooting. ' />
					<List content='PSD to HTML/Shopify.' />
					<List content='Responsive Design.' />
					<List content='UX/UI Enhancement.' />
				</div>
				<div>
					<List content='Theme Implementation.' />
					<List content='Platform Migration.' />
					<List content='Image Edit.' />
					<List content='App Integration.' />
				</div>
			</ul>
		</>
	);
};

export default Checklist;
