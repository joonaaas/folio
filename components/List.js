import Image from 'next/image';
import CheckSVG from './CheckSVG';

const List = ({ content }) => {
	return (
		<li className='text-lg'>
			<div className='flex items-center'>
				<div className='pl-6'>
					<CheckSVG />
				</div>
				<p className='pl-4'>{content}</p>
			</div>
		</li>
	);
};

export default List;
