import { useState } from 'react';
import Button from '../Button/Button';
import './Counter.scss';

const Counter = ({ animate, setAnimate }) => {
	const [count, setCount] = useState(Math.floor(Math.random() * 20)); // Initialized with a random int.

	// Logic for incrementing / decrementing the counters.
	const handleSetCount = (direction) => {
		if (count === 0 && direction === 'down') return;

		direction === 'up' ? setCount(count + 1) : setCount(count - 1);

		// Handles the animation effects. Had to add setTimeout to flip the animate state back so it could be run again.
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
				{/* Arrow functions required due to passing parameters  */}
				<Button clickHandler={() => handleSetCount('down')} value='down' />
				<Button clickHandler={() => handleSetCount('up')} value='up' />
			</div>
		</section>
	);
};

export default Counter;
