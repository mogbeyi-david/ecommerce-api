/**
 * Function to generate a fake password used for seeding
 * @returns {string}
 */
const generateFakePassword = () => {
  let fakePassword = ''; // Declare the initial empty string
  // Declare a pool of random characters to choose from
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let counter = 0; counter <= 10; counter++)
    // Fetch a random character and append it to the initial password
    fakePassword += possible.charAt(Math.floor(Math.random() * possible.length));
  return fakePassword;
};

export default generateFakePassword;