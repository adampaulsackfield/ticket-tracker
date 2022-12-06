import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

import './Button.scss';

const Button = ({ onClick, value }) => {
	return (
		<button className='button' onClick={onClick} value={value}>
			{value === 'up' ? <FaAngleUp /> : <FaAngleDown />}
		</button>
	);
};

export default Button;
