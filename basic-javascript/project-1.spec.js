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

  describe('subtract five function', () => {
    it('subtracts five away from argument', () => {
      expect(helpers.subtractFive(10)).toEqual(5);
    });

    it('checks for a number or intended number input', () => {
      expect(helpers.subtractFive('10')).toBe(5);
      expect(helpers.subtractFive([1, 2, 3])).toBe(NaN);
      expect(helpers.subtractFive('ten')).toBe(NaN);
    });

    it('able to handle a negative return', () => {
      expect(helpers.subtractFive(3)).toBe(-2);
    });
  });

  describe('same length checker function', () => {
    it('checks if the strings are the same length and returns boolean', () => {
      expect(helpers.areSameLength('asa', 'lit')).toBe(true);
      // make sure input is a string
      // make sure output is a boolean
    });
  });

  it('are two numbers equal', () => {
    expect(helpers.areEqual(5, 4)).toBe(false);
    // make sure input is a number
    // make sure output is a boolean
  });

  it('checks if the number is less then 90', () => {
    expect(helpers.lessThanNinety(89)).toBe(true);
    expect(helpers.lessThanNinety(91)).toBe(false);
    // make sure input is a number
    // make sure output is a boolean
  });

  it('checks if the number is greater than fifty', () => {
    expect(helpers.greaterThanFifty(51)).toBe(true);
    expect(helpers.greaterThanFifty(49)).toBe(false);
    // make sure input is a number
    // make sure output is a boolean
  });

  it('adds two numbers together', () => {
    expect(helpers.add(2, 2)).toBe(4);
    // make sure input is two numbers
    // make sure output is a number
  });

  it('subtracts one number from another', () => {
    expect(helpers.subtract(4, 2)).toBe(2);
    // make sure input is two numbers
    // make sure output is a number
  });

  it('divides two numbers', () => {
    expect(helpers.divide(4, 2)).toBe(2);
    // make sure input is two numbers
    // make sure output is a number
  });

  it('multiplies two numbers', () => {
    expect(helpers.multiply(3, 2)).toBe(6);
    // make sure input is two numbers
    // make sure output is a number
  });

  it('gets the remainder of two numbers divided', () => {
    expect(helpers.getRemainder(6, 4)).toBe(2);
    // make sure input is two numbers
    // make sure output is a number
  });

  it('checks if a number is even', () => {
    expect(helpers.isEven(10)).toBe(true);
    expect(helpers.isEven(7)).toBe(false);
    // make sure input is a number
    // make sure output is a boolean
  });

  it('checks if a number is odd', () => {
    expect(helpers.isOdd(7)).toBe(true);
    expect(helpers.isOdd(8)).toBe(false);
    // make sure input is a number
    // make sure output is a boolean
  });

  it('multiplies a number by itself', () => {
    expect(helpers.square(3)).toBe(9);
    // make sure input is a number
    // make sure output is a number
  });

  it('multiplies a number times its self three times', () => {
    expect(helpers.cube(3)).toBe(27);
    // make sure input is a number
    // make sure output is number
  });

  it('multiplies a number to the power of another', () => {
    expect(helpers.raiseToPower(2, 5)).toBe(32);
  });

  it('takes a float and rounds to a integer', () => {
    expect(helpers.roundNumber(2.2)).toBe(2);
    expect(helpers.roundNumber(2.7)).toBe(3);
    expect(helpers.roundNumber(2)).toBe(2);
    // make sure input is a number
    // make sure output is number
  });

  it('takes a float and rounds it up to the nearest integer', () => {
    expect(helpers.roundUp(2.2)).toBe(3);
    // make sure input is a number
    // make sure output is number
  });

  it('adds an exclamation mark to a sentence', () => {
    expect(helpers.addExclamationPoint('yes')).toBe('yes!');
    // make sure input is a string
    // make sure output is a string
    // make sure there is only one exclamation mark
  });

  it('takes a first name and combines it with a last name', () => {
    expect(helpers.combineNames('Asa', 'Shalom')).toBe('Asa Shalom');
    expect(helpers.combineNames('Asa ', 'Shalom')).toBe('Asa  Shalom');
    // make sure both inputs are strings
    // remove extra spaces from input strings
    // make sure output is a single string
  });

  it('greets someone by name', () => {
    expect(helpers.getGreeting('Asa')).toBe("Hello Asa!");
    // make sure input is string
    // remove any extra spaces from input string if needed
    // make sure output is a string
  });

  it('multiplies length by width', () => {
    expect(helpers.getRectangleArea(4, 5)).toBe(20);
    // make sure input is two numbers
    // make sure output is a number
  });

  it('gets the area of a triangle', () => {
    expect(helpers.getTriangleArea(3, 5)).toBe(7.5);
    // make sure input is two numbers
    // make sure output is a number
  });

  it('gets area of a circle based on the radius', () => {
    expect(helpers.getCircleArea(3)).toBe(28.274333882308138);
    // make sure input is a number
    // make sure output is a number
  });

  it('gets the volume of a rectangular prism', () => {
    expect(helpers.getRectangularPrismVolume(2, 3, 4)).toBe(24);
    // make sure input is three numbers
    // make sure output is a number
  });

});