const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  // it("should return true if the word is present diagonally", function() {
  //   const result = wordSearch([
  //     ['M', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  //     ['S', 'A', 'I', 'N', 'F', 'E', 'L', 'D'],
  //     ['Y', 'F', 'R', 'F', 'Q', 'U', 'A', 'L'],
  //     ['H', 'M', 'M', 'K', 'E', 'V', 'R', 'G'],
  //     ['W', 'H', 'S', 'A', 'Y', 'E', 'R', 'L'],
  //     ['B', 'F', 'R', 'E', 'Z', 'E', 'Y', 'B'],
  //     ['U', 'B', 'K', 'W', 'A', 'K', 'A', 'I'],
  //     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S']
  //   ], 'MARK')

  //   assert.isTrue(result);
  // });

  // it("should return true if the word is present diagonally", function() {
  //   const result = wordSearch([
  //     ['M', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  //     ['S', 'L', 'I', 'N', 'F', 'E', 'L', 'D'],
  //     ['J', 'F', 'R', 'F', 'Q', 'U', 'A', 'L'],
  //     ['H', 'O', 'M', 'K', 'E', 'V', 'R', 'G'],
  //     ['W', 'H', 'M', 'A', 'Y', 'E', 'R', 'L'],
  //     ['B', 'F', 'R', 'E', 'Z', 'E', 'Y', 'B'],
  //     ['U', 'B', 'K', 'W', 'L', 'K', 'A', 'I'],
  //     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S']
  //   ], 'JOMEL')

  //   assert.isTrue(result);
  // });
});
