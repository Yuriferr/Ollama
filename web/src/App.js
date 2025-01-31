import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
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
      console.error('Erro ao enviar mensagem:', error);
    }
  };

  return (
    <div className="Chatbot container-fluid vh-100 bg-dark d-flex flex-column align-items-center p-3">
      <h1 className="text-light">Chatbot</h1>
      <div className="chat-window container-fluid flex-grow-1 bg-secondary rounded p-3"> 
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <div className='message-content'>{msg.text}</div>
          </div>
        ))}
      </div>
      <div className="input-group mt-3">
        <input
          type="text"
          className="form-control bg-dark text-light"
          placeholder="Digite uma mensagem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button className="btn btn-primary" onClick={sendMessage}>
          Enviar
        </button>
      </div>
    </div>
  );
}