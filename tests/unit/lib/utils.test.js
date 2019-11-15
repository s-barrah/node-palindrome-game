import chai from 'chai';

import { palindrome } from '../../../src/lib/Utils';

const expect = chai.expect;

const WORDS = {
  valid: 'bob',
  invalid: 'test',
  valid_sentence: 'A man, a plan, a canal. Panama'
};

describe('lib/Utils', () => {

  it('should validate word as palindrome', () => {
    expect(palindrome(WORDS.valid)).to.eql(true);
  });


  it('should not validate word as palindrome', () => {
    expect(palindrome(WORDS.invalid)).to.eql(false);
  });


  it('should validate sentence as palindrome', () => {
    expect(palindrome(WORDS.valid_sentence)).to.eql(true);
  });


});
