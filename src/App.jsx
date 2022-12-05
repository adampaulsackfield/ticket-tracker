import './App.scss';
import Tickets from './components/Tickets/Tickets';

import data from './assets/data';
import { useState, useEffect } from 'react';

function App() {
	const [searchTerm, setSearchTerm] = useState(null);
	const [employeeData, setEmployeeData] = useState(data);
	const [filtered, setFiltered] = useState([]);
	const [roles, setRoles] = useState([]);

	const handleChange = (e) => {
		setSearchTerm(e.target.value.toLowerCase());
		const filtered = employeeData.filter((employee) => {
			const employeeNameLower = employee.name.toLowerCase();

			return employeeNameLower.includes(searchTerm) && employee;
		});
		setFiltered(filtered);
	};

	const handleRoleChange = (e) => {
		const filtered = employeeData.filter(
			(employee) => employee.role === e.target.value
		);
		setFiltered(filtered);
	};

	useEffect(() => {
		const uniqueRoles = new Set();
		employeeData.map((employee) => uniqueRoles.add(employee.role));
		setRoles(Array.from(uniqueRoles));
	}, [employeeData]);

	return (
		<main className='main'>
			<h1 className='main__header'>
				Ticket<span className='main__header--strikethrough'>master</span>{' '}
				Tracker
			</h1>

			<section className='main__filters'>
				<input
					className='main__filters--input'
					type='text'
					placeholder='Filter by name...'
					onChange={handleChange}
				/>

				<div className='main__role-wrapper'>
					<p className='main__filters--text'>Role: </p>
					<select className='main__filters--select' onChange={handleRoleChange}>
						<option className='main__filters--select-option' value='all'>
							All
						</option>
						{roles.map((role) => {
							return (
								<option key={role} value={role}>
									{role}
								</option>
							);
						})}
					</select>
				</div>
			</section>

			<Tickets team={filtered.length ? filtered : employeeData} />
		</main>
	);
}

export default App;
