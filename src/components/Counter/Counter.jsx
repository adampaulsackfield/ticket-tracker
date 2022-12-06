import { useState } from 'react';
import Button from '../Button/Button';
import './Counter.scss';

const Counter = ({ animate, setAnimate }) => {
	const [count, setCount] = useState(Math.floor(Math.random() * 20));

	const handleSetCount = (direction) => {
		if (count === 0 && direction === 'down') return;

		direction === 'up' ? setCount(count + 1) : setCount(count - 1);

		setAnimate(!animate);
		setTimeout(() => {
			setAnimate(false);
		}, 400);
	};

	return (
		<section className='counter'>
			<h2 className='counter__header'>Completed</h2>

			<p className='counter__count'>{count}</p>

			<div className='counter__buttons'>
				<Button clickHandler={() => handleSetCount('down')} value='down' />
				<Button clickHandler={() => handleSetCount('up')} value='up' />
			</div>
		</section>
	);
};

export default Counter;
