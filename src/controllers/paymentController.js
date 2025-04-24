const Payment = require('../models/Payment');
const Distributor = require('../models/Distributor');

exports.recordPayment = async (req, res, next) => {
  try {
    const { distributorId, amount, transactionId, metadata } = req.body;
    const payment = await Payment.create({ distributorId, amount, transactionId, metadata });
    res.status(201).json(payment);
  } catch (err) {
    next(err);
  }
};

exports.getPayment = async (req, res, next) => {
  try {
    const payment = await Payment.findById(req.params.id).populate('distributorId');
    if (!payment) return res.status(404).json({ message: 'Payment not found' });
    res.json(payment);
  } catch (err) {
    next(err);
  }
};

exports.getDistributorPayments = async (req, res, next) => {
  try {
    const payments = await Payment.find({ distributorId: req.params.id });
    res.json(payments);
  } catch (err) {
    next(err);
  }
};

exports.webhookPaymentUpdate = async (req, res, next) => {
  try {
    const { transactionId, status } = req.body;
    const payment = await Payment.findOneAndUpdate({ transactionId }, { status }, { new: true });
    if (!payment) return res.status(404).json({ message: 'Transaction not found' });
    res.json({ message: 'Payment updated', payment });
  } catch (err) {
    next(err);
  }
};
