const { Router } = require('express');
const { productsController } = require('../controllers/products.controller');

const product = Router();

product.get('/:id', productsController.listById);

product.get('/', productsController.list);

product.post('/', productsController.create);

product.put('/:id', productsController.edit);

product.delete('/:id', productsController.delete);

module.exports = product;
