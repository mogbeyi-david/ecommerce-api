const sum = require('../sandbox');
const assert = require('assert');

describe('Array', function () {
  describe('sum', function () {
    it('should return 10 when firstNumber is 5 and secondNumber is 5', function () {
      assert.equal(sum(5, 5), 10);
    });
  });
});