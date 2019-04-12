const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: {
    required: true,
    type: String,
    maxlength: 255
  },
  email: {
    required: true,
    type: String,
    maxlength: 255,
    unique: true
  },
  password: {
    required: true,
    type: String
  }
});