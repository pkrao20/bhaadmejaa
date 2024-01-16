const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add this line

const app = express();
app.use(cors());
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

let messages = [];


app.use(bodyParser.json());


app.get('/messages', (req, res) => {
  res.json(messages);
});


app.post('/messages', (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required for a message.' });
  }
  
  const newMessage = {
    id: messages.length + 1,
    text,
    timestamp: new Date().toISOString(),
  };
 
  messages.push(newMessage);

  res.status(201).json(newMessage);
});

// Start the server

