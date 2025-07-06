const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB Atlas"))
.catch(err => console.error("MongoDB connection error:", err));

// Schemas
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    categoryId: mongoose.Schema.Types.ObjectId
});

const categorySchema = new mongoose.Schema({
    name: String,
    description: String
});

const orderSchema = new mongoose.Schema({
    customerName: String,
    productId: mongoose.Schema.Types.ObjectId,
    quantity: Number,
    status: String
});

// Models
const Product = mongoose.model('Product', productSchema);
const Category = mongoose.model('Category', categorySchema);
const Order = mongoose.model('Order', orderSchema);

// Routes
app.get('/', (req, res) => {
    res.send('Elderwood & Ember backend is running.');
});

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/categories', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/orders', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Elderwood & Ember backend is running on port ${PORT}`);
});