import faker from 'faker';
import {Customer} from '../../../models';
import {ShippingRegion} from '../../../models';
import generateFakePassword from '../../../helpers/utility-functions/generate-fake-password';
import generateRandomString from '../../../helpers/utility-functions/generate-random-string';


/**
 *  The Class responsible for generating fake customers
 */
class CustomerSeeder {

  /**
   *
   * @returns {Promise<void>}
   */
  static async generateFakeCustomers() {
    try {
      console.log('--Generating 100 Fake Customers--');
      for (let counter = 0; counter < 100; counter++) { // run a for loop to create 100 customers
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
      return console.log('-----------Finished generating Fake Customers--------------');
    } catch (exception) {
      console.log('--------Sorry, fake customers could not be generated-------------');
      return console.log(exception.message);
    }
  };
}


export default CustomerSeeder;