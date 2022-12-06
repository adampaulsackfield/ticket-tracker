import './App.scss';

import TicketContainer from './containers/TicketContainer/TicketContainer';

function App() {
	return (
		<main className='main container'>
			<h1 className='main__header'>
				Ticket<span className='main__header--strikethrough'>master</span>{' '}
				Tracker
			</h1>

			<TicketContainer />
		</main>
	);
}

export default App;
