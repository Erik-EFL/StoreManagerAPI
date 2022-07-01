const { productsModel } = require('../../../models/productsModel');
const { connection } = require('../../../models/connection');
const { data } = require('../mocks/products.mocks')

const sinon = require('sinon');
const { expect } = require('chai');

describe('Requisito 1 Model', () => {
  beforeEach(() => {
    sinon.restore();
  });
  describe('Testa de Models /products verificando se é possível listados os itens', () => {
    it('Será validado que é possível listar todos os produtos', async () => {
      sinon.stub(connection, 'query').resolves([data]);
      const response = await productsModel.list();
      expect(response).to.deep.eq(data)
    });
    it('Será validado que é possível listar um produto inexistent', async () => {
      sinon.stub(connection, 'query').resolves([[]]);
      const response = await productsModel.listById(1001);
      expect(response).to.be.undefined;
    });
    it('Será validado que é possível listar um produto específico com sucesso', async () => {
      sinon.stub(connection, 'query').resolves([[data]]);
      const response = await productsModel.listById(2);
      expect(response).to.be.equal(data)
    });
  })
})

