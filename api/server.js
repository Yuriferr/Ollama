const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors'); // Importando o pacote cors
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); // Usando o middleware cors

let conversation = []; // Array para armazenar as conversas

app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;

  // Adiciona a nova mensagem do usuário ao histórico
  conversation.push({ role: 'user', content: userMessage });

  try {
    const response = await axios.post('http://localhost:11434/api/chat', {
      model: 'llama3.2',
      messages: conversation,
      stream: false,
      prompt: 'Responda de forma direta e concisa:'
    });

    const botReply = response.data.message.content;

    // Adiciona a resposta da IA ao histórico
    conversation.push({ role: 'assistant', content: botReply });

    res.send({ reply: botReply });
  } catch (error) {
    console.error('Error connecting to Ollama:', error.response ? error.response.data : error.message);  // Logando erro detalhado
    res.status(500).send('Error connecting to Ollama');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});