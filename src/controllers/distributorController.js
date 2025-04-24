const Distributor = require('../models/Distributor');

exports.createDistributor = async (req, res, next) => {
  try {
    const distributor = await Distributor.create(req.body);
    res.status(201).json(distributor);
  } catch (err) {
    next(err);
  }
};

exports.updateDistributor = async (req, res, next) => {
  try {
    const distributor = await Distributor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!distributor) return res.status(404).json({ message: 'Distributor not found' });
    res.json(distributor);
  } catch (err) {
    next(err);
  }
};

exports.getDistributor = async (req, res, next) => {
  try {
    const distributor = await Distributor.findById(req.params.id);
    if (!distributor) return res.status(404).json({ message: 'Distributor not found' });
    res.json(distributor);
  } catch (err) {
    next(err);
  }
};
