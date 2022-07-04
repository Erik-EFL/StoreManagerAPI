const { productsModel } = require('../../../models/productsModel');
const { connection } = require('../../../models/connection');
const { data, editado } = require('../mocks/products.mocks')

const sinon = require('sinon');
const chaiAsPromised = require('chai-as-promised');
const { expect, use } = require('chai');
const NotFoundError = require('../../../middlewares/error/NotFoundError');
use(chaiAsPromised);

describe('Camada de Products-Model', () => {
  beforeEach(() => {
    sinon.restore();
  });
  describe('Testa a função #list', () => {
    it('Será validado que é possível listar todos os produtos', () => {
      sinon.stub(connection, 'query').resolves([data]);
      expect(productsModel.list()).to.eventually.deep.eq(data)
    });
  })
  describe('Testa a função #listById', () => {
    it('Será validado que é possível listar um produto inexistent', () => {
      sinon.stub(connection, 'query').resolves([[]]);
      expect(productsModel.listById(1001)).to.eventually.be.undefined;
    });
    it('Será validado que é possível listar um produto específico com sucesso', () => {
      sinon.stub(connection, 'query').resolves([[data]]);
      expect(productsModel.listById(2)).to.eventually.equal(data)
    });
  })
  describe('Testa a função #create', () => {
    it('Sera validade se é possível cadastrar um produto sem nome', () => {
      sinon.stub(connection, 'query').resolves([[]]);
      expect(productsModel.create('')).to.eventually.be.undefined;
    })
    it('Testa se é possível criar um novo produto', async () => {
      sinon.stub(connection, 'query').resolves([{ insertId: 4 }]);
      const response = await productsModel.create('Produto Teste');
      expect(response).to.be.deep.equal({ id: 4, name: 'Produto Teste' });
    })
  })

  describe('Testa a função #edit', () => {
    it('Testa se é possível editar um produto', async () => {
      sinon.stub(connection, 'query').resolves(editado);
      const response = await productsModel.edit(editado.id, editado.name);
      expect(response).to.be.equal(editado);
    })
  })

  describe('Testa a função #delete', () => {
    it('Testa se é possível deletar um produto', async () => {
      sinon.stub(connection, 'query').resolves(editado);
      const response = await productsModel.delete(editado.id);
      expect(response).to.be.equal(editado);
    })
  })
})

