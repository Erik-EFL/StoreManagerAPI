const { productsServices } = require('../services/productsServices');

const productsController = {
  list: async (_req, res) => {
    const products = await productsServices.list();
    res.status(200).json(products);
  },

  listById: async (req, res) => {
    const { id } = req.params;
    const result = await productsServices.listById(id);
    res.status(200).json(result);
  },
};

module.exports = {
  productsController,
};
