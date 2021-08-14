import Image from 'next/image';
import Chat from '../public/images/chat.png';
import Gmail from '../public/svg/gmail.svg';
import Linkedin from '../public/svg/linkedin.svg';
import Container from './Container';

const Contact = () => {
	return (
		<Container>
			<div className='flex justify-between px-2'>
				<p>con·tact</p>
				<p>004</p>
			</div>

			<div className='flex flex-col items-center justify-center py-10 pb-12 leading-relaxed sm:py-16 md2:py-20 lg:py-40'>
				<div className='mb-2 w-28 md:w-32'>
					<Image src={Chat} alt='Message me?' />
				</div>
				<h2 className='text-3xl font-heading'>Need my help?</h2>
				<p className='px-4 text-lg text-center md:text-xl lg:my-2'>
					Get in touch today if you’d like to work together!
				</p>
				<div className='flex items-center justify-center mt-4'>
					<div className='px-4 border-r-3'>
						<a
							href='mailto:jonasqalolino@gmail.com'
							target='_blank'
							rel='noreferrer'>
							<Gmail className='w-12 h-12' />
						</a>
					</div>
					<div className='px-4 '>
						<a
							href='https://www.linkedin.com/in/jonas-alolino/'
							target='_blank'
							rel='noreferrer'>
							<Linkedin className='w-12 h-12' />
						</a>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Contact;
