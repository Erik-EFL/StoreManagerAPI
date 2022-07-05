const Joi = require('joi');
const { runSchema } = require('../validator');

const validate = {
  id: runSchema(Joi.object({
    id: Joi.number().required().positive().integer(),
  })),

  body: runSchema(
    Joi.object({
      name: Joi.string().min(5).required(),
    }),
  ),
};

module.exports = { validate };
