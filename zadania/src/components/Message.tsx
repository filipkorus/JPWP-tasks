import React from 'react';
import IMessage from '../types/IMessage';
import {Box} from '@mui/material';

const Message = ({message}: {
	message: IMessage
}) => {
	const formatDate = (date: Date | string): string => {
		const d = new Date(date);
		/* format date as you want here */

		// const month = d.getMonth();
		// const year = d.getFullYear();
		// etc
		// const newDate = `${hour}:${minute} ${day}-${month}-${year}`;
		// return newDate;

		return d.toString();
	};

	return <Box>

		{message.author}: {message.content} | {formatDate(message.date)}

	</Box>;
};

export default Message;
