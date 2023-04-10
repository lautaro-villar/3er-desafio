const fs = require('fs');

class ProductManager {
  constructor(filePath) {
    this.filePath = filePath;
  }

  getAllProducts() {
    const rawData = fs.readFileSync(this.filePath);
    return JSON.parse(rawData);
  }

  getProductsWithLimit(limit) {
    const rawData = fs.readFileSync(this.filePath);
    const products = JSON.parse(rawData);
    return products.slice(0, limit);
  }
}

module.exports = ProductManager;
