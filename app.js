const express = require('express');
const ProductManager = require('./productManager');

const app = express();

const productManager = new ProductManager('./products.json');

app.get('/products', (req, res) => {
  const limit = req.query.limit;
  if (limit) {
    const products = productManager.getProductsWithLimit(parseInt(limit));
    res.send(products);
  } else {
    const products = productManager.getAllProducts();
    res.send(products);
  }
});

app.listen(port, () => {
  console.log(`server funcionando desde el puerto 8080`);
});
