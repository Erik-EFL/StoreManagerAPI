const { Router } = require('express');

const { productsController } = require('../controllers/productsControllers');

const router = Router();

router.get('/', productsController.list);
router.get('/:id', productsController.listById);

module.exports = router;
