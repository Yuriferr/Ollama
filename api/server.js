const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors'); // Importando o pacote cors
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); // Usando o middleware cors

app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await axios.post('http://localhost:11434/api/generate', {
      model: 'llama3.1',
      prompt: userMessage,
      stream: false,
    });

    res.json({ reply: response.data.response });
  } catch (error) {
    console.error('Error connecting to Ollama:', error.response ? error.response.data : error.message);  // Logando erro detalhado
    res.status(500).send('Error connecting to Ollama');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});