import mongoose from 'mongoose';

const { Schema } = mongoose;

const shippingRegionSchema = new Schema({
  shippingRegion: {
    type: String,
    required: true,
    unique: true
  }
});


//  Create the shipping region model from the schema
const ShippingRegion = mongoose.model('ShippingRegion', shippingRegionSchema);

//  Export the ShippingRegion model
export default ShippingRegion;
