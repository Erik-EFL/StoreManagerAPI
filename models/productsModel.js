const { connection } = require('./connection');

const productsModel = {
  list: async () => {
    const dbQuery = 'SELECT * FROM StoreManager.products';
    const [rows] = await connection.query(dbQuery);
    return rows;
  },

  listById: async (id) => {
    const dbQuery = 'SELECT * FROM db.movie WHERE id = ?';
    const [[response]] = await connection.query(dbQuery, [id]);
    return response;
  },
};

module.exports = { productsModel };
