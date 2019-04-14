import faker from 'faker';
import { Customer } from '../..';
import { ShippingRegion } from '../..';
import generateFakePassword from '../../../helpers/utility-functions/generate-fake-password';
import generateRandomString from '../../../helpers/utility-functions/generate-random-string';


/**
 *  The Class responsible for generating fake customers
 */
class CustomerSeeder {
  /**
   *
   * @returns {Promise<*>}
   */
  static async generateFakeCustomers() {
    try {
      for (let counter = 0; counter < 100; counter += 1) { // run a for loop to create 100 customers
        const newCustomer = { // Declare new customer
          name: faker.name.findName(),
          email: faker.internet.email(),
          password: generateFakePassword(),
          creditCard: generateRandomString(),
          address_1: faker.address.streetAddress(),
          address_2: faker.address.streetAddress(),
          city: faker.address.city(),
          region: faker.address.state(),
          postalCode: faker.address.zipCode(),
          country: faker.address.country(),
          shippingRegionId: await ShippingRegion
            .findOne() // Fetch a random shipping region
            .skip(Math.floor(Math.random() * (await ShippingRegion.countDocuments()))),
          dayPhoneNumber: faker.phone.phoneNumber(),
          nightPhoneNumber: faker.phone.phoneNumber(),
          mobilePhoneNumber: faker.phone.phoneNumber()
        };
        const customer = new Customer(newCustomer);
        await customer.save(); // Save new customer
      }
      return true;
    } catch (exception) {
      return exception.message;
    }
  }
}


export default CustomerSeeder;
