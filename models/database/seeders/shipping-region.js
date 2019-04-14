import { ShippingRegion } from '../..';


/**
 *  Class responsible for generating fake shipping regions
 */
class ShippingRegionSeeder {
  /**
   *
   * @returns {Promise<*>}
   */
  static async generateFakeShippingRegion() {
    const shippingRegions = ['Please Select', 'US / Canada', 'Europe', 'Rest of World'];
    try {
      for (let count = 0; count <= 3; count += 1) {
        const shippingRegion = new ShippingRegion({
          shippingRegion: shippingRegions[count]
        });
        await shippingRegion.save();
      }
      return true;
    } catch (exception) {
      return exception.message;
    }
  }
}

export default ShippingRegionSeeder;
