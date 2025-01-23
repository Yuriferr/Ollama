import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const response = await axios.post('http://localhost:3001/api/chat', { message: input });
      const botMessage = { sender: 'bot', text: response.data.reply };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Chat with Ollama</h5>
          <div className="chat-box">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <div className="message-content">{msg.text}</div>
              </div>
            ))}
          </div>
          <div className="input-group">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;