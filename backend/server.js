const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Import cors

const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors());

// Connect to MongoDB (updated connection code)
mongoose.connect('mongodb://localhost:27017/products_item')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// Define a model for your product items
const Item = mongoose.model('Item', new mongoose.Schema({
  name: String,
  brand: String,
  unit: String,
  price: Number,
  originalPrice: Number,
  image: String,
}));

// Fetch products from the 'items' collection
app.get('/api/products', async (req, res) => {
  try {
    const products = await Item.find();
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).send('Error fetching products');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
