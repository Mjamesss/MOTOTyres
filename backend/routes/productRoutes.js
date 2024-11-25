const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/products_item', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the schema and model
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
    res.json(products); // Send the products as a response
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching products');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
