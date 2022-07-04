const Joi = require('joi');
const { productsModel } = require('../models/productsModel');
const NotFoundError = require('../middlewares/error/NotFoundError');
const { runSchema } = require('../middlewares/validator');

const productsServices = {
  validateParamsId: runSchema(Joi.object({
    id: Joi.number().required().positive().integer(),
  })),

  validadeBody: runSchema(
    Joi.object({
      name: Joi.string().required().min(5),
    }),
  ),

  list: async () => {
    const itens = await productsModel.list();
    return itens;
  },

  checkIfExists: async (id) => {
    const product = await productsModel.getById(id);
    if (!product) throw new NotFoundError('Product not found');
    return product;
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
    if (!Object.keys(changes).length) throw new NotFoundError('No changes to update');
    const { name } = changes;
    const response = await productsModel.edit(id, name);
    return response;
  },

  delete: async (id) => {
    const response = await productsModel.delete(id);
    if (!response) throw new Error('Unable to remove', 'Something went wrong :(');
    return true;
  },
};

module.exports = { productsServices };
