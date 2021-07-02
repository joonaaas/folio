import Logo from './Logo';

const Header = () => {
	return (
		<header className='flex items-end'>
			<div className='pl-2.5 border-dashed border-b-3'></div>
			<div className='w-full'>
				<div className='flex items-center justify-between w-full border-black border-b-3 border-r-3'>
					<div>
						<Logo />
					</div>
					<div className='w-full px-4'>
						<div className='flex items-center justify-between'>
							<p>who·a·m·i</p>
							<p>fo·lio</p>
						</div>
						<div className='hidden'>
							<p>^2021</p>
						</div>
					</div>
				</div>
			</div>
			<div className='pr-2.5 border-dashed border-b-3'></div>
		</header>
	);
};

export default Header;
