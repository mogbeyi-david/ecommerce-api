import Customer from "../../../models/shipping-region";
import generateRandomString from '../../utility-functions/generate-random-string'


const createTwoCustomers = async () => {
  await Customer.collection.insertMany([
    {
      name: generateRandomString(),
      email: generateRandomString(),
      password: generateRandomString()
    },
    {
      name: generateRandomString(),
      email: generateRandomString(),
      password: generateRandomString()
    }
  ]);
};


export default createTwoCustomers;