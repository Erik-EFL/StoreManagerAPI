const { productsModel } = require('../../../models/productsModel');
const { productsServices } = require('../../../services/productsServices');
const { data } = require('../mocks/products.mocks')

const sinon = require('sinon');
const chaiAsPromised = require('chai-as-promised');
const { expect, use } = require('chai');
use(chaiAsPromised);

describe('Requisito 1 Services ', () => {
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
  })
});
