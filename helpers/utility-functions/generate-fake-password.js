/**
 *
 * @returns {string}
 */
const generateFakePassword = () => {
  let fakePassword = '';
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let counter = 0; counter <= 10; counter++)
    fakePassword += possible.charAt(Math.floor(Math.random() * possible.length));
  return fakePassword;
};

export default generateFakePassword;