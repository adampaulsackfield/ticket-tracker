import Counter from '../Counter/Counter';
import './Ticket.scss';

const Ticket = ({ member }) => {
	return (
		<section className='ticket' key={member.id}>
			<div>
				<h2 className='ticket__header'>{member.name}</h2>
				<p className='ticket__text'>{member.role}</p>
			</div>

			<Counter />
		</section>
	);
};

export default Ticket;
