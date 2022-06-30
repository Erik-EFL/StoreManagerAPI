const { Products } = require('../../../models/productsModel');
/* const productService = require('../../../services/productsServices');
const productController = require('../../../controllers/productsControllers'); */
const { connection } = require('../../../models/connection');
const { data } = require('./mock')

const sinon = require('sinon');
const { expect } = require('chai');
/* const { expect, use } = require('chai');
const chaiAsPromised = require('chai-as-promised');
use(chaiAsPromised); */

describe('Requisito 1 ', () => {
  beforeEach(() => {
    sinon.restore();
  });
  describe('testa se a rota / verificando se os produtos são listados', () => {
    it('Será validado que é possível listar todos os produtos', async () => {
      sinon.stub(connection, 'query').resolves([data]);
      const response = await Products.listProducts();
      expect(response).to.be.deep.equal(data)
    });
    it('Será validado que é possível listar um produto específico com sucesso', async () => {
      sinon.stub(connection, 'query').resolves([data]);
      const response = await Products.listById(2);
      expect(response).to.be.equal(data)
    });
  })
})

