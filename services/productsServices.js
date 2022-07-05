const Joi = require('joi');
const { productsModel } = require('../models/productsModel');
const NotFoundError = require('../middlewares/error/NotFoundError');
const { runSchema } = require('../middlewares/validator');

const productsServices = {
  validateParamsId: runSchema(Joi.object({
    id: Joi.number().required().positive().integer(),
  })),

  validateBody: runSchema(
    Joi.object({
      name: Joi.string().min(5).required(),
    }),
  ),

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
