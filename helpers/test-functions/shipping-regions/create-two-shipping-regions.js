import ShippingRegion from "../../../models/shipping-region";
import generateRandomString from '../../utility-functions/generate-random-string'

async function createTwoShippingRegions() {
  await ShippingRegion.collection.insertMany([
    {
      shippingRegion: generateRandomString()
    },
    {
      shippingRegion: generateRandomString()
    }
  ]);
}

export default createTwoShippingRegions;