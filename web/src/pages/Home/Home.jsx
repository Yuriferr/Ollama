import { useState, useEffect } from "react";
import axios from "axios";
import { IoSend } from "react-icons/io5";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Home.css";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true); // Inicializa como true

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const text = input; // Salva o texto do input
    setInput(""); // Limpa o input

    const userMessage = { role: "user", content: text };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post("http://localhost:3001/api/chat", {
        message: text,
      });
      const botReply = { role: "assistant", content: response.data.reply };
      setMessages([...messages, userMessage, botReply]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <main className="Home">
      <header>
        <p>
          Desenvolvido por Yuri Fernandes
        </p>
        <div>
        <a
            href="https://www.linkedin.com/in/yuriferr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> Yuri Fernandes
          </a>
          <a
            href="https://github.com/Yuriferr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> Yuriferr
          </a>
        </div>
        
        <p>Versão 1.2</p>
      </header>

      <section className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
      </section>
      <form className="input-box" onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          Enviar
          <IoSend />
        </button>
      </form>
      

      {loading && (
        <div className="loading">
          <img src="/images/loading.gif" alt="loading..." />
          <p className="typing-animation">
            Ola, seja bem vindo ao meu chatbot, como posso ajudar?
          </p>
        </div>
      )}
    </main>
  );
}