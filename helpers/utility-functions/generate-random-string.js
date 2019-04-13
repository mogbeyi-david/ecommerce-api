/**
 *
 * @returns {string}
 */
const generateRandomString = () => {
  let randomString = '';
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let counter = 0; counter <= 10; counter++)
    randomString += possible.charAt(Math.floor(Math.random() * possible.length));
  return randomString;
};

export default generateRandomString;