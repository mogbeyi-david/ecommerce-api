/**
 * Function to generate a fake password used for seeding
 * @returns {string}
 */
const generateFakePassword = () => {
  let fakePassword = ''; // Declare the initial empty string
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // Declare a pool of random characters
  for (let counter = 0; counter <= 10; counter++)
    fakePassword += possible.charAt(Math.floor(Math.random() * possible.length)); // Fetch a random character and append it to the initial password
  return fakePassword;
};

export default generateFakePassword;