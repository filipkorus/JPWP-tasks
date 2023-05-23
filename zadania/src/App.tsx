import React from 'react';
import './App.css';

import {SocketProvider} from './contexts/SocketContext';
import ChatWindow from './components/ChatWindow';

function App() {
	return <SocketProvider>
		<ChatWindow/>
	</SocketProvider>;
}

export default App;
