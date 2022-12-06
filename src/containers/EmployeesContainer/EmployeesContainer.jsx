import { useState, useEffect } from 'react';

// Initial Data
import rawData from '../../assets/data';

// Components
import Employee from '../../components/Employee/Employee';
import Filters from '../../components/Filters/Filters';

// Styles
import './EmployeesContainer.scss';

// Ticket Container - Houses state related to the data that is rendered. For example: searchTerms, selectedRoles and filtered data.
const EmployeesContainer = () => {
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

			{/* Map over the filtered data and render a Employee component for each. */}
			<section className='employees'>
				{filtered.map((employee) => (
					<Employee key={employee.id} employee={employee} />
				))}
			</section>
		</>
	);
};

export default EmployeesContainer;
