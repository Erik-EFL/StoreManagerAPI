const { productsModel } = require('../models/products.model');
const NotFoundError = require('../middlewares/error/NotFoundError');

const productsServices = {
  list: async () => {
    const itens = await productsModel.list();
    return itens;
  },

  listById: async (id) => {
    const data = await productsModel.listById(id);
    if (!data) throw new NotFoundError('Product not found');
    return data;
  },

  create: async (name) => {
    const response = await productsModel.create(name);
    return response;
  },

  edit: async (id, name) => {
    const response = await productsModel.edit(id, name);
    if (!response.affectedRows) {
      throw new NotFoundError('Product not found');
    }
    return response.product;
  },

  delete: async (id) => {
    const response = await productsModel.delete(id);
    if (!response) throw new NotFoundError('Product not found');
    return true;
  },
};

module.exports = { productsServices };
