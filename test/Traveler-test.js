import { expect } from 'chai';
import traveler from '../src/sample-data/Traveler-sample.js';
import Traveler from '../src/Traveler.js';

describe('Traveler', () => {
  let traveler1, traveler2, traveler3

    beforeEach(() => {
      traveler1 = new Traveler(traveler[0]);
      traveler2 = new Traveler(traveler[1]);
      traveler3 = new Traveler(traveler[2]);
    });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  })

  it('should have an id', () => {
    expect(traveler1.id).to.equal(1);
    expect(traveler2.id).to.equal(2);
    expect(traveler3.id).to.equal(3);
  })

})
