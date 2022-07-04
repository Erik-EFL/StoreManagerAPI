const { productsModel } = require('../../../models/productsModel');
const { productsServices } = require('../../../services/productsServices');
const { data, editado, excluído } = require('../mocks/products.mocks')

const sinon = require('sinon');
const chaiAsPromised = require('chai-as-promised');
const { expect, use } = require('chai');
const NotFoundError = require('../../../middlewares/error/NotFoundError');
use(chaiAsPromised);

describe('Camada de Products-Services ', () => {
  beforeEach(() => {
    sinon.restore();
  });

  describe(`Testa a função #list`, () => {
    it('Verifica se é retornado um Array', () => {
      sinon.stub(productsModel, 'list').resolves(data);
      return expect(productsServices.list()).to.eventually.deep.equal(data)
    })
  });

  describe('Testa a função #listById', () => {

    it('Testa se retorna um objeto especifico ao pesquisar por Id', () => {
      sinon.stub(productsModel, 'listById').resolves(data);
      return expect(productsServices.listById(2)).to.eventually.deep.equal(data);
    })

    it('Testa se retorna undefined ao pesquisar um objeto inexistente', () => {
      sinon.stub(productsModel, 'listById').resolves([[]]);
      expect(productsServices.listById(1001)).to.eventually.be.undefined;
    })
    it('Testa se retorna um erro ao pesquisar um objeto inexistente', () => {
      sinon.stub(productsModel, 'listById').resolves(null);
      return expect(productsServices.listById(1001)).to.eventually.be.rejectedWith(NotFoundError);
    })
  })

  describe('Testa a função #create', () => {
    it('Testa se é possível criar um novo produto', () => {
      sinon.stub(productsModel, 'create').resolves(editado)
      return expect(productsServices.create(editado.name)).to.eventually.deep.equal(editado);
    })
  })

  describe('Testa a função #edit', () => {
    it('Testa se é possível editar um produto', () => {
      sinon.stub(productsModel, 'edit').resolves(editado)
      return expect(productsServices.edit(editado.id, editado.name)).to.eventually.deep.equal(editado);
    })
  })

  describe('Testa a função #delete', () => {
    it('Testa se ao tentar deletar um item inexistente retorna um erro', () => {
      sinon.stub(productsModel, 'delete').resolves(null);
      return expect(productsServices.delete({id: 2})).to.eventually.rejectedWith(NotFoundError);
    })
    it('Testa se é possível deletar um produto', () => {
      sinon.stub(productsModel, 'delete').resolves(editado)
      return expect(productsServices.delete(editado.id)).to.eventually.equal(true);
    })
  })
});
