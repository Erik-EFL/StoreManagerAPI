const { Router } = require('express');
const { products } = require('../controllers/products.controller');

const product = Router();

product.get('/:id', products.listById);

product.get('/', products.list);

product.post('/', products.create);

product.put('/:id', products.edit);

product.delete('/:id', products.delete);

module.exports = product;
