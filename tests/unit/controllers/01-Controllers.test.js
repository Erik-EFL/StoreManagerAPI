const { productsController } = require('../../../controllers/products.controller');
const { productsServices } = require('../../../services/products.services');
const { data } = require('../mocks/products.mocks')
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');

const { expect, use } = require('chai');

use(chaiAsPromised);

describe('Camada de Products-Controller', () => {
  beforeEach(() => {
    sinon.restore();
  });

  describe('Testa a function #list', () => {
    it('Caso retorne um array retornar o res.status 200 e um res.json com um objeto', async () => {
      sinon.stub(productsServices, 'list').resolves(data)
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      await productsController.list(req, res)

      expect(res.status.calledWith(200)).to.be.eq(true);
      expect(res.json.calledWith(data)).to.be.eq(true);
    })
  })

  describe('Testa a função #listById', () => {
    it('Caso retorne um array retornar o res.status 200 e um res.json com um objeto', async () => {
      sinon.stub(productsServices, 'listById').resolves(data)
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
      req.params = { id: 1 };

      await productsController.listById(req, res)

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(data)).to.be.true;
    })
  })

  describe('Testa a função #create', () => {
    it('Caso retorne um array retornar o res.status 201 e um res.json com um objeto', async () => {
      sinon.stub(productsServices, 'create').resolves(data)
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
      req.body = { name: 'Teste' };

      await productsController.create(req, res)

      expect(res.status.calledWith(201)).to.be.true;
      expect(res.json.calledWith(data)).to.be.true;
    })
  })

  describe('Testa a função #edit', () => {
    it('Caso retorne um array retornar o res.status 200 e um res.json com um objeto', async () => {
      sinon.stub(productsServices, 'edit').resolves(data)
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
      req.params = { id: 1 };
      req.body = { name: 'Teste' };

      await productsController.edit(req, res)

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(data)).to.be.true;
    })
  })

  describe('Testa a função #delete', () => {
    it('Caso retorne um array retornar o res.status 200 e um res.json com um objeto', async () => {
      sinon.stub(productsServices, 'delete').resolves(data)
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
      req.params = { id: 1 };

      await productsController.delete(req, res)

      expect(res.status.calledWith(204)).to.be.true;
      expect(res.json.calledWith(data)).to.be.true;
    })
  })
})
