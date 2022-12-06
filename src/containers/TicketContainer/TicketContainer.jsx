import { useState, useEffect } from 'react';

import rawData from '../../assets/data';

import Ticket from '../../components/Ticket/Ticket';
import Filters from '../../components/Filters/Filters';

import './TicketContainer.scss';

const TicketContainer = () => {
	const [roles, setRoles] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedRole, setSelectedRole] = useState('');
	const [filtered, setFiltered] = useState(rawData);

	const handleChange = (e) => {
		setSearchTerm(e.target.value.toLowerCase());
	};

	const handleRoleChange = (e) => {
		setSelectedRole(e.target.value);
	};

	useEffect(() => {
		const data = rawData.filter(({ role, name }) => {
			return (
				role.includes(selectedRole) && name.toLowerCase().includes(searchTerm)
			);
		});

		setFiltered(data);
	}, [selectedRole, searchTerm]);

	useEffect(() => {
		const uniqueRoles = new Set();
		rawData.map(({ role }) => uniqueRoles.add(role));
		setRoles(Array.from(uniqueRoles));
	}, []);

	return (
		<>
			<Filters
				handleChange={handleChange}
				roles={roles}
				handleRoleChange={handleRoleChange}
			/>

			<section className='tickets'>
				{filtered.map((member) => (
					<Ticket key={member.id} member={member} />
				))}
			</section>
		</>
	);
};

export default TicketContainer;
