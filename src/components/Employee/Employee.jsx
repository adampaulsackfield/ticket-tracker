import { useState } from 'react';

import Counter from '../Counter/Counter';

import './Employee.scss';
import 'animate.css';

// Employee component - Destructure employee from props and then destructure the keys we need.
const Employee = ({ employee: { id, name, role } }) => {
	const [animate, setAnimate] = useState(false);

	return (
		// Dynamic class used for the animation along with some state which is toggle when a button is pressed, these are passed to the counter components.
		<section className={`employee ${animate && 'animate'}`} key={id}>
			<div>
				<h2 className='employee__header'>{name}</h2>
				<p className='employee__text'>{role}</p>
			</div>

			<Counter animate={animate} setAnimate={setAnimate} />
		</section>
	);
};

export default Employee;
