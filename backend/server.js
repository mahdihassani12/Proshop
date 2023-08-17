import express from 'express';
import products from './data/products.js'

const port = 5000;

const app = express();

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.get('/api/products', (req, res) => {
    res.json(products)
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product)
})

app.listen(port, () => console.log(`Server is runing on port ${ port }`));