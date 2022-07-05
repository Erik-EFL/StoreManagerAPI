const { Router } = require('express');
const { sales } = require('../controllers/sales.controller');

const sale = Router();

sale.get('/:id', sales.listById);

sale.get('/', sales.list);

sale.post('/', sales.create);

sale.put('/:id', sales.edit);

sale.delete('/:id', sales.delete);

module.exports = sale;
