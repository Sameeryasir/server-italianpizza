const express = require('express');
const mongoose = require('mongoose');
const app = express();

//8yt4Xa1TM8FVyZEt
//sameeryasir

const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:3000', 'https://react-italianpizza.vercel.app']
}));


// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://sameeryasir:8yt4Xa1TM8FVyZEt@cluster0.kdp7ch4.mongodb.net', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

// Define the product schema
const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    image: String
});

// Create the Product model
const Product = mongoose.model('Product', productSchema);

// Define a route to get all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Error retrieving products:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
const port = 3008;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;