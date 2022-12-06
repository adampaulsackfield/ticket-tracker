import { useState } from 'react';

import Counter from '../Counter/Counter';

import './Ticket.scss';
import 'animate.css';

const Ticket = ({ member }) => {
	const [animate, setAnimate] = useState(false);

	return (
		<section className={`ticket ${animate && 'animate'}`} key={member.id}>
			<div>
				<h2 className='ticket__header'>{member.name}</h2>
				<p className='ticket__text'>{member.role}</p>
			</div>

			<Counter animate={animate} setAnimate={setAnimate} />
		</section>
	);
};

export default Ticket;
