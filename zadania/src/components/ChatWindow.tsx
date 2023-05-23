import React, {useEffect, useState} from 'react';
import '../styles/ChatWindow.css';
import {v4 as randomId} from 'uuid';
import {Paper, Typography} from '@mui/material';
import InputField from './InputField';
import IMessage from '../types/IMessage';
import {useSocket} from '../contexts/SocketContext';
import Message from './Message';

const ChatWindow = () => {
	const authorName = 'my name';

	const [messages, setMessages] = useState<IMessage[]>([]);
	const {socket} = useSocket();

	const handleSubmit = (text: string) => {
		console.log(`InputField submitted: ${text}`);

		const newMessage: IMessage = {
			author: authorName,
			content: text,
			date: new Date()
		};

		/* emit send-message socket.io event *HERE* */

		/* add newMessage to messages *HERE* */
	}

	/* listen for incoming messages */
	useEffect(() => {
		const handler = (incomingMsg: IMessage) => {
			setMessages([...messages, incomingMsg]);
		}

		/* listen for incoming messages *HERE* */

		return () => {
			/* stop listening for incoming messages *HERE* */
		};
	}, [socket, messages]);

	/* get all messages */
	useEffect(() => {
		socket?.emit('get-all-messages');

		socket?.once('receive-all-messages', (allMessages: IMessage[]) => {
			setMessages(allMessages);
		});
	}, [socket]);

	return <div className="root">
		<Paper className="paper" elevation={3}>
			<Typography variant="h5" component="h1" gutterBottom>
				Chat Window
			</Typography>

			<div className="messageBox">
				{messages.map((msg: IMessage) => <Message message={msg} key={randomId()}/>)}
			</div>

			<InputField handleSubmit={handleSubmit}/>
		</Paper>
	</div>;
};

export default ChatWindow;
