const Joi = require('joi');
const { runSchema } = require('../middlewares/error/validator');
const { productsModel } = require('../models/productsModel');

const productsServices = {
  validateParamsId:
    runSchema(Joi.object({
      id: Joi.number().required().positive().integer(),
    })),

  listById: async (id) => {
    const [name] = await productsModel.listById(id);
    return name;
  },

  list: async () => {
    const itens = await productsModel.list();
    return itens;
  },
};

module.exports = { productsServices };
