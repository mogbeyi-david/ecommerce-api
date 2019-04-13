import mongoose from 'mongoose';

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
    type: String,
    minlength: 8,
    maxlength: 255
  },

  creditCard: {
    type: String
  },

  address_1: {
    type: String
  },

  address_2: {
    type: String
  },

  city: {
    type: String
  },

  region: {
    type: String
  },

  postalCode: {
    type: String
  },

  country: {
    type: String
  },

  shippingRegionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ShippingRegion'
  },

  dayPhoneNumber: {
    type: String
  },

  nightPhoneNumber: {
    type: String
  },

  mobilePhoneNumber: {
    type: String
  }
});

// Create the customer model from the customer Schema
const Customer = mongoose.model('Customer', customerSchema);
// Export the model
export default Customer