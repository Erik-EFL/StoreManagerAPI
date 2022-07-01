const { productsController } = require('../../../controllers/productsControllers');
const { productsServices } = require('../../../services/productsServices');
const { data } = require('../mocks/products.mocks')
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');

const { expect, use } = require('chai');

use(chaiAsPromised);

describe('Requisito 1 Controller', () => {
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
})
