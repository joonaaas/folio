import Image from 'next/image';
import Check from '../public/svg/check.svg';

const List = ({ content }) => {
	return (
		<li className='my-2 text-lg md:text-xl xxs:pl-6 sm:pl-4'>
			<div className='flex items-center'>
				<div className='pl-6 md:pl-2'>
					<Check />
				</div>
				<p className='pl-4'>{content}</p>
			</div>
		</li>
	);
};

export default List;
