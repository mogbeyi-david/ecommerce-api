import mongoose from 'mongoose';

const { Schema } = mongoose;

const shippingRegionSchema = new Schema({
  shippingRegion: {
    type: String,
    required: true,
    unique: true
  }
});

const ShippingRegion = mongoose.model('ShippingRegion', shippingRegionSchema);

export default ShippingRegion;
