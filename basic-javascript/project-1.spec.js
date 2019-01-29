const helpers = require('./project-1');

// start testing!

describe('project-1 testing', () => {

  describe('multiply by ten function', () => {
    it('checks for a number or intended number input', () => {
      expect(helpers.multiplyByTen('4')).toBe(40);
      expect(helpers.multiplyByTen([1, 2, 3])).toBe(NaN);
      expect(helpers.multiplyByTen('four')).toBe(NaN);
    });

    it('multiplies by ten', () => {
      expect(helpers.multiplyByTen(10)).toEqual(100);
    });

    it('able to multiply negative numbers', () => {
      expect(helpers.multiplyByTen(-10)).toBe(-100);
    });
  });




  
});