const { productsModel } = require('../../../models/productsModel');
const { data, editado } = require('../mocks/products.mocks')

const sinon = require('sinon');
const chaiAsPromised = require('chai-as-promised');
const { expect, use } = require('chai');
const connection = require('../../../models/connection');
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
    it('Testa se é possível criar um novo produto', async () => {
      sinon.stub(connection, 'query').resolves([{ insertId: 4 }]);
      const response = await productsModel.create('Produto Teste');
      expect(response).to.be.deep.equal({ id: 4, name: 'Produto Teste' });
    })
  })

  describe('Testa a função #edit', () => {
    it('Testa se é possível editar um produto', async () => {
      sinon.stub(connection, 'query').resolves(editado);
      expect(productsModel.edit(editado.id, editado.name)).to.eventually.be.deep.equal(editado);
    })
  })

  describe('Testa a função #delete', () => {
    it('Testa se é possível deletar um produto', async () => {
      sinon.stub(connection, 'query').resolves([{ affectedRows: 1 }]);
      const response = await productsModel.delete(1);
      expect(response).to.be.equal(1);
    })
  })
})

