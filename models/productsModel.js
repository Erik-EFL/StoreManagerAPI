const connection = require('./connection');

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
    /* Ajuda do Danillo e Wendryo para corrigir um bug no qual estava desestruturando
      2 vezes
    */
    const dbQuery = 'INSERT INTO StoreManager.products (name) VALUES (?)';
    const [{ insertId }] = await connection.query(dbQuery, [name]);
    return { id: insertId, name };
  },

  edit: async (id, name) => {
    /* Ajuda do Danillo e Wendryo para corrigir um bug no qual estava desestruturando
      2 vezes
    */
    const dbQuery = 'UPDATE StoreManager.products SET name = ? WHERE id = ?';
    const [{ affectedRows }] = await connection.query(dbQuery, [name, id]);
    return { affectedRows, product: { id, name } };
  },

  delete: async (id) => {
    const dbQuery = 'DELETE FROM StoreManager.products WHERE id = ?';
    const [{ affectedRows }] = await connection.query(dbQuery, [id]);
    return affectedRows;
  },
};

module.exports = { productsModel };
