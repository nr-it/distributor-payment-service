const express = require('express');
const router = express.Router();
const distributorController = require('../controllers/distributorController');
const paymentController = require('../controllers/paymentController');

router.post('/', distributorController.createDistributor);
router.put('/:id', distributorController.updateDistributor);
router.get('/:id', distributorController.getDistributor);
router.get('/:id/payments', paymentController.getDistributorPayments);

module.exports = router;
