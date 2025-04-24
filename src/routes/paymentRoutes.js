const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.post('/', paymentController.recordPayment);
router.get('/:id', paymentController.getPayment);
router.post('/paymentUpdate', paymentController.paymentUpdate);

module.exports = router;
