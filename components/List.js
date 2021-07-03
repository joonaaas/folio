import Image from 'next/image';
import Check from '../public/svg/check.svg';

const List = ({ content }) => {
	return (
		<li className='text-lg'>
			<div className='flex items-center'>
				<div className='pl-6'>
					<Check />
				</div>
				<p className='pl-4'>{content}</p>
			</div>
		</li>
	);
};

export default List;
