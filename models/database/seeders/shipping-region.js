import {ShippingRegion} from '../../../models';


/**
 *  Class responsible for generating fake shipping regions
 */
class ShippingRegionSeeder {

  /**
   *
   * @returns {Promise<void>}
   */
  static async generateFakeShippingRegion() {
    const shippingRegions = ['Please Select', 'US / Canada', 'Europe', 'Rest of World'];
    console.log('--Generating 4 Fake Shipping Regions--');
    try {
      for (let count = 0; count <= 3; count++) {
        const shippingRegion = new ShippingRegion({
          shippingRegion: shippingRegions[count]
        });
        await shippingRegion.save();
      }
      return console.log('--Finished generating 4 Fake Shipping Regions--');
    } catch (exception) {
      return console.log()
    }
  }
}

export default ShippingRegionSeeder;