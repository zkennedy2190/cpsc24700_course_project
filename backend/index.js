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

// Test endpoint
app.get('/', (req, res) => {
    res.send('Elderwood & Ember backend is running.');
});

// Test addl API endpoints
app.get("/api/products", (req, res) => {
    res.json([
        { id: 1, name: "Phoenix Feather Wand", price: 99.99, description: "A powerful wand with a phoenix feather core." },
        { id: 2, name: "Dragon Scale Cloak", price: 149.99, description: "A protective cloak woven with dragon scales." },
        { id: 3, name: "Crystal Ball", price: 49.99, description: "A clear crystal ball for scrying and divination." }
    ]);
});

app.get('/api/categories', (req, res) => {
    res.json([{ id: 1, name: 'Wands' }]);
});

app.get('/api/orders', (req, res) => {
    res.json([{ id: 1, item: 'Phoenix Feather Wand', quantity: 1 }]);
});

app.listen(PORT, () => {
    console.log(`Elderwood & Ember backend is running on port ${PORT}`);
});
