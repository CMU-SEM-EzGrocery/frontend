const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    unique: true,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  roleId: {
    type: String,
    required: true
  },
  currency: String,
  language: String,
  address: String,
  rating: Number,
  orders: []
});

module.exports = userSchema;