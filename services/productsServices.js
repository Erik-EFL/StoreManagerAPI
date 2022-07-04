const { productsModel } = require('../models/productsModel');
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

  create: async (data) => {
    const { name } = data;
    const response = await productsModel.create(name);
    return response;
  },

  edit: async (id, changes) => {
    // if (!Object.keys(changes).length) throw new NotFoundError('No changes to update');
    const { name } = changes;
    const response = await productsModel.edit(id, name);
    return response;
  },

  delete: async (id) => {
    const response = await productsModel.delete(id);
    if (!response) throw new NotFoundError('Error deleting, this product may not exist');
    return true;
  },
};

module.exports = { productsServices };
