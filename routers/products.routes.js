const { Router } = require('express');
const { productsController } = require('../controllers/productsControllers');

const products = Router();

products.get('/:id', productsController.listById);

products.get('/', productsController.list);

products.post('/', productsController.create);

products.put('/:id', productsController.edit);

products.delete('/:id', productsController.delete);

module.exports = products;
