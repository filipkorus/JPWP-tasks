import React, {useState} from 'react';
import {Button, TextField} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const InputField = ({handleSubmit, placeholder}: {
	handleSubmit: (text: string) => any,
	placeholder?: string
}) => {
	const [text, setText] = useState<string>('');

	const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		return; // proszę usunąć tego returna przed rozpoczeciem zadania nr 4.

		/* zadanie nr 4 *HERE* */
	}
	const handleButtonClick = (e:React.MouseEvent) => {
		e.preventDefault();
		if (text.length === 0) return;

		handleSubmit(text);
		setText('');
	}

	return <div className="inputContainer">
		<TextField
			className="messageInput"
			label={placeholder || "Type a message"}
			variant="outlined"
			value={text}
			onChange={(e) => setText(e.target.value)}
			onKeyDown={(event) => handleKeyDown(event)}
		/>
		<Button variant="contained" color="primary" onClick={handleButtonClick}>
			<SendIcon/>
		</Button>
	</div>;
};

export default InputField;
