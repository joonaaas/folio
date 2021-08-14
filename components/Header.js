import Logo from '../public/svg/nas.svg';

const Header = () => {
	return (
		<header className='flex items-end'>
			<div className='pl-2.5 border-dashed border-b-3 xs:pl-8 md:pl-14 md2:pl-20 '></div>
			<div className='w-full'>
				<div className='flex items-center justify-between w-full border-black border-b-3 border-r-3'>
					<div className='px-3 py-2 border-l-3 border-r-3'>
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
			<div className='pr-2.5 border-dashed border-b-3 xs:pr-8 md:pr-14 md2:pr-20 '></div>
		</header>
	);
};

export default Header;
