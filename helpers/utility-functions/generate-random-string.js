/**
 *
 * @returns {string}
 */
const generateRandomString = () => {
  let randomString = ''; // Declare the initial empty string
  // Declare a pool of random characters
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let counter = 0; counter <= 10; counter++)
    // Fetch a random character and append it to the initial character
    randomString += possible.charAt(Math.floor(Math.random() * possible.length));
  return randomString;
};

export default generateRandomString;