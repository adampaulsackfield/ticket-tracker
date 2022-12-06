import './App.scss';

import EmployeesContainer from './containers/EmployeesContainer/EmployeesContainer';

function App() {
	return (
		<main className='main container'>
			<h1 className='main__header'>
				Ticket<span className='main__header--strikethrough'>master</span>{' '}
				Tracker
			</h1>

			<EmployeesContainer />
		</main>
	);
}

export default App;
