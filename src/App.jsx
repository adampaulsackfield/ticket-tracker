import './App.scss';
import Tickets from './components/Tickets/Tickets';

import rawData from './assets/data';
import { useState, useEffect } from 'react';

function App() {
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
		const data = rawData.filter((employee) => {
			return (
				employee.role.includes(selectedRole) &&
				employee.name.toLowerCase().includes(searchTerm)
			);
		});

		setFiltered(data);
	}, [selectedRole, searchTerm]);

	useEffect(() => {
		const uniqueRoles = new Set();
		rawData.map((employee) => uniqueRoles.add(employee.role));
		setRoles(Array.from(uniqueRoles));
	}, []);

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

					<select
						className='main__filters--select'
						onChange={handleRoleChange}
						defaultValue='Employee Category'
					>
						<option className='main__filters--select-option' value=''>
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

			<Tickets team={filtered} />
		</main>
	);
}

export default App;
