const { productsServices } = require('../services/productsServices');

const productsController = {
  list: async (_req, res) => {
    const listProducts = await productsServices.list();
    res.status(200).json(listProducts);
  },

  listById: async (req, res) => {
    const { id } = productsServices.validateParamsId(req.params);
    const productsById = await productsServices.listById(id);
    res.status(200).json(productsById);
  },

  create: async (req, res) => {
    const { name } = productsServices.validadeBody(req.body);
    const newProduct = await productsServices.create(name);
    res.status(201).json(newProduct);
  },

  edit: async (req, res) => {
    const { id } = productsServices.validateParamsId(req.params);
    const data = await productsServices.validadeBody(req.body);
    const editedProduct = await productsServices.edit(id, data);
    res.status(200).json(editedProduct);
  },

  delete: async (req, res) => {
    const { id } = productsServices.validateParamsId(req.params);
    const removedProduct = await productsServices.delete(id);
    res.status(200).json(removedProduct);
  },
};

module.exports = { productsController };
