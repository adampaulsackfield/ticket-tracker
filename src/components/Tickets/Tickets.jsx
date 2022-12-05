import Ticket from '../Ticket/Ticket';
import './Tickets.scss';

const Tickets = ({ team }) => {
	return (
		<section className='tickets'>
			{team.map((member) => (
				<Ticket key={member.id} member={member} />
			))}
		</section>
	);
};

export default Tickets;
