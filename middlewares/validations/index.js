const Joi = require('joi');
const { runSchema } = require('../validator');

const validations = {
  validateParamsId: runSchema(Joi.object({
    id: Joi.number().required().positive().integer(),
  })),

  validadeBody: runSchema(
    Joi.object({
      name: Joi.string().required().min(5),
    }),
  ),
};

module.exports = { validations };
