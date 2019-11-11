const mongoose = require('mongoose');
const userSchema = require('./UserSchema');

const orderSchema = new mongoose.Schema({
  stepState: Number,
  tripInfo: {
    stPoint: String,
    midPoint: String,
    edPoint: String,
    price: String,
    tripTime: String
  },
  helper: userSchema,
  requester: userSchema,
});

const Order = module.exports = mongoose.model('Order', orderSchema);