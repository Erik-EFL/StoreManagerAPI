const { validate } = require('../middlewares/validations/validations');
const { productsServices } = require('../services/products.services');

const productsController = {
  list: async (_req, res) => {
    const listProducts = await productsServices.list();
    res.status(200).json(listProducts);
  },

  listById: async (req, res) => {
    const { id } = validate.id(req.params);
    const productsById = await productsServices.listById(id);
    res.status(200).json(productsById);
  },

  create: async (req, res) => {
    const { name } = validate.body(req.body);
    const newProduct = await productsServices.create(name);
    res.status(201).json(newProduct);
  },

  edit: async (req, res) => {
    const { id } = validate.id(req.params);
    const { name } = validate.body(req.body);
    const editedProduct = await productsServices.edit(id, name);
    res.status(200).json(editedProduct);
  },

  delete: async (req, res) => {
    const { id } = validate.id(req.params);
    const removedProduct = await productsServices.delete(id);
    res.status(204).json(removedProduct);
  },
};

module.exports = { productsController };
