const { connection } = require('./connection');

const productsModel = {
  list: async () => {
    const dbQuery = 'SELECT * FROM StoreManager.products';
    const [rows] = await connection.query(dbQuery);
    return rows;
  },

  listById: async (id) => {
    const dbQuery = 'SELECT * FROM StoreManager.products WHERE id = ?';
    const [[response]] = await connection.query(dbQuery, [id]);
    return response;
  },

  create: async (name) => {
    if (!name) return null;
    const dbQuery = 'INSERT INTO StoreManager.products (name) VALUES (?)';
    const [{ insertId }] = await connection.query(dbQuery, [name]);

    return { id: insertId, name };
  },

  edit: async (id, changes) => {
    const dbQuery = 'UPDATE StoreManager.products SET name ? WHERE id = ?';

    await connection.query(dbQuery, [changes.name, id]);
    const editedProduct = await this.listById(id);
    return editedProduct;
  },

  delete: async (id) => {
    const dbQuery = 'SELECT * FROM StoreManager.products WHERE id = ?';

    const removed = await connection.query(dbQuery, [id]);
    return removed;
  },
};

module.exports = { productsModel };
