const express = require('express');
require('express-async-errors');
// const routes = require('./routers/export.routes');
const products = require('./routers/products');
const middlewareError = require('./middlewares/error/middlewareError');

const app = express();
app.use(express.json());

// app.use('/sales', routes.sales);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', products);

app.use(middlewareError);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação
module.exports = app;
