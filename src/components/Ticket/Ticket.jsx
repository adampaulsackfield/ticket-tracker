import { useState } from 'react';

import Counter from '../Counter/Counter';

import './Ticket.scss';
import 'animate.css';

const Ticket = ({ member }) => {
	const [hovered, setHovered] = useState(false);

	const handleMouseIn = (e) => {
		setHovered(!hovered);
	};

	const handleMouseOut = (e) => {
		setHovered(!hovered);
	};

	return (
		<section
			className={hovered ? 'ticket animate' : 'ticket'}
			key={member.id}
			onMouseEnter={handleMouseIn}
			onMouseLeave={handleMouseOut}
		>
			<div>
				<h2 className='ticket__header'>{member.name}</h2>
				<p className='ticket__text'>{member.role}</p>
			</div>

			<Counter />
		</section>
	);
};

export default Ticket;
