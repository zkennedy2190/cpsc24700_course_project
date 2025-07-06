const express = require('express');
const cors = require('cors');

const products = [
    { id: 1, name: 'Phoenix Feather Wand', price: 49.99, description: 'A wand with a phoenix feather core.' },
    { id: 2, name: 'Invisibility Cloak', price: 149.99, description: 'A cloak that renders the wearer invisible.' },
    { id: 3, name: 'Potion Kit', price: 29.99, description: 'Everything needed for beginner potion making.' },
];

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

// Root endpoint
app.get('/', (req, res) => {
    res.send('Elderwood & Ember backend is running.');
});

// API endpoints
app.get("/api/products", (req, res) => {
    res.json(products);
});

app.get('/api/categories', (req, res) => {
    res.json([{ id: 1, name: 'Wands' }]);
});

app.get('/api/orders', (req, res) => {
    res.json([{ id: 1, item: 'Phoenix Feather Wand', quantity: 1 }]);
});

// Start server
app.listen(PORT, () => {
    console.log(`Elderwood & Ember backend is running on port ${PORT}`);
});