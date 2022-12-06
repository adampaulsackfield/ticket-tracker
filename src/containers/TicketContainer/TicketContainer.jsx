import { useState, useEffect } from 'react';

// Initial Data
import rawData from '../../assets/data';

// Components
import Ticket from '../../components/Ticket/Ticket';
import Filters from '../../components/Filters/Filters';

// Styles
import './TicketContainer.scss';

// Ticket Container - Houses state related to the data that is rendered. For example: searchTerms, selectedRoles and filtered data.
const TicketContainer = () => {
	const [roles, setRoles] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedRole, setSelectedRole] = useState('');
	const [filtered, setFiltered] = useState(rawData);

	// Event Handler for Name Input.
	const handleChange = (e) => {
		setSearchTerm(e.target.value.toLowerCase());
	};

	// Event Handler for Role Select.
	const handleRoleChange = (e) => {
		setSelectedRole(e.target.value);
	};

	// useEffect used here to run each time the searchTerm or the selectedRole is updated. rawData is filtered and we immediately destructure the properties we need (role/name) if the role includes the selectedRole and the name includes the searchTime we setFiltered with the results.
	useEffect(() => {
		const data = rawData.filter(({ role, name }) => {
			return (
				role.includes(selectedRole) && name.toLowerCase().includes(searchTerm)
			);
		});

		setFiltered(data);
	}, [selectedRole, searchTerm]);

	// useEffect here to run once, uniqueRoles are created using a Set and immediately converting back to an Array to iterate over when building the select options.
	useEffect(() => {
		const uniqueRoles = new Set();
		rawData.map(({ role }) => uniqueRoles.add(role));
		setRoles(Array.from(uniqueRoles));
	}, []);

	return (
		<>
			{/* Filter logic has been moved to its own component. */}
			<Filters
				roles={roles}
				handleChange={handleChange}
				handleRoleChange={handleRoleChange}
			/>

			{/* Map over the filtered data and render a Ticket component for each. */}
			<section className='tickets'>
				{filtered.map((member) => (
					<Ticket key={member.id} member={member} />
				))}
			</section>
		</>
	);
};

export default TicketContainer;
