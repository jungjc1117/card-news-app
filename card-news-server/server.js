const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample data
let cardNews = [
  { id: 1, title: 'Card 1', content: 'This is the first card.' },
  { id: 2, title: 'Card 2', content: 'This is the second card.' },
];

// Routes
app.get('/api/cards', (req, res) => {
  res.json(cardNews);
});

app.post('/api/cards', (req, res) => {
  const { title, content } = req.body;
  const newCard = { id: cardNews.length + 1, title, content };
  cardNews.push(newCard);
  res.status(201).json(newCard);
});

app.delete('/api/cards/:id', (req, res) => {
  const { id } = req.params;
  cardNews = cardNews.filter((card) => card.id !== parseInt(id, 10));
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
