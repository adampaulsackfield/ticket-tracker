import './Filters.scss';

// Filters - Immediately destructure all the keys we need. Attach the handlers to their respective inputs.
const Filters = ({ handleChange, roles, handleRoleChange }) => {
	return (
		<section className='filters'>
			<div className='filters__wrap'>
				<label htmlFor='name' className='filters__text'>
					Name:{' '}
				</label>
				<input
					className='filters__input'
					type='text'
					name='name'
					placeholder='Search...'
					onChange={handleChange}
				/>
			</div>

			<div className='filters__wrap'>
				<label htmlFor='role' className='filters__text'>
					Role:{' '}
				</label>

				<select
					className='filters__select'
					onChange={handleRoleChange}
					name='role'
					defaultValue='Employee Category'
				>
					<option className='filters__select-option' value=''>
						All
					</option>
					{/* Here is where we map over the uniqueRoles which have come down from the ticketContainer. */}
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
	);
};

export default Filters;
