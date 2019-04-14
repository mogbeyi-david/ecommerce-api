/**
 *
 * @returns {string}
 */
const generateRandomString = () => {
  let randomString = ''; // Declare the initial empty string
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // Pool of random characters
  for (let counter = 0; counter <= 10; counter++)
    randomString += possible.charAt(Math.floor(Math.random() * possible.length)); // Fetch a random character and append it to the initial character
  return randomString;
};

export default generateRandomString;