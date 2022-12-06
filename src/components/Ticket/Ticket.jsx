import { useState } from 'react';

import Counter from '../Counter/Counter';

import './Ticket.scss';
import 'animate.css';

// Ticket component - Destructure member from props and then destructure the keys we need.
const Ticket = ({ member: { id, name, role } }) => {
	const [animate, setAnimate] = useState(false);

	return (
		// Dynamic class used for the animation along with some state which is toggle when a button is pressed, these are passed to the counter components.
		<section className={`ticket ${animate && 'animate'}`} key={id}>
			<div>
				<h2 className='ticket__header'>{name}</h2>
				<p className='ticket__text'>{role}</p>
			</div>

			<Counter animate={animate} setAnimate={setAnimate} />
		</section>
	);
};

export default Ticket;
