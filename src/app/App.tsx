import {ChangeEvent, useState, MouseEvent} from 'react';

interface ChatMessage {
    role: string;
    parts: string;
}

const App = () => {
    const [message, setMessage] = useState('');
    const [history, setHistory] = useState<ChatMessage[]>([]);
    const [response, setResponse] = useState('');

    const sendMessage = async (e: MouseEvent) => {
        const res = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message, history })
        });

        const data = await res.json();
        setResponse(data.reply);
        setHistory([...history, { role: 'user', parts: message }, { role: 'model', parts: data.reply }]);
        // setMessage('');
    };

    return (
        <div className="chat-container">
            <textarea
                className="chat-textarea"
                value={message}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
            ></textarea>
            <button className="chat-send-button" onClick={sendMessage}>Send</button>
            <div className="chat-response">{response}</div>
        </div>
    );
};

export default App;
