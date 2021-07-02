import Image from 'next/image';
import check from '../public/check.svg';
const List = ({ content }) => {
	return (
		<li className='text-lg'>
			<div className='flex items-center'>
				<div className='pl-8'>
					<Image src={check} alt='check' />
				</div>
				<p className='pl-4'>{content}</p>
			</div>
		</li>
	);
};

export default List;
