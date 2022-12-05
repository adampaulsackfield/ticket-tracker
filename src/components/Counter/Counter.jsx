import { useState } from 'react';
import './Counter.scss';

const Counter = () => {
	const [count, setCount] = useState(0);

	const handleSetCount = (index) => {
		if (count === 0 && index === 'down') return;

		index === 'up' ? setCount(count + 1) : setCount(count - 1);
	};

	return (
		<section className='counter'>
			<h2 className='counter__header'>Counter</h2>

			<p className='counter__count'>{count}</p>

			<div className='counter__buttons'>
				<button
					className='counter__buttons--up'
					onClick={() => handleSetCount('up')}
				>
					Increment
				</button>

				<button
					className='counter__buttons--down'
					onClick={() => handleSetCount('down')}
				>
					Decrement
				</button>
			</div>
		</section>
	);
};

export default Counter;
