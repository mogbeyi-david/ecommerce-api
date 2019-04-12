import {expect} from 'chai';

import sum from '../sandbox';

describe("index test", () => {
  describe("sayHello function", () => {
    it("should say Hello guys!", () => {

      const result = sum(10, 10);
      expect(result).to.equal(20);
    })
  })
})