const mongoose = require('mongoose');

const distributorSchema = new mongoose.Schema({
  name: String,
  gst: String,
  pan: String,
  bankDetails: {
    accountNumber: String,
    ifsc: String,
    bankName: String
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Distributor', distributorSchema);
