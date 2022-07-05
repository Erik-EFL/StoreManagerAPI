const products = require('./products.routes');
const sale = require('./sales.routes');

const routes = {
  products,
  sale,
};

module.exports = { routes };
