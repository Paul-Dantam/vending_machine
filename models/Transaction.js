const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  payment: {
    type: Number,
    required: true
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now
  },
  quantity: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("transaction", transactionSchema);
