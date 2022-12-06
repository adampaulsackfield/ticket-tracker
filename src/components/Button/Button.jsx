import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

import './Button.scss';

const Button = ({ clickHandler, value }) => {
	return (
		<button className='button' onClick={clickHandler}>
			{value === 'up' ? <FaAngleUp /> : <FaAngleDown />}
		</button>
	);
};

export default Button;
