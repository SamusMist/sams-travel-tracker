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

  it('should have a name', () => {
    expect(traveler1.name).to.equal("Ham Leadbeater");
    expect(traveler2.name).to.equal("Rachael Vaughten");
    expect(traveler3.name).to.equal("Sibby Dawidowitsch");
  })

  it('should have a traveler type', () => {
    expect(traveler1.travelerType).to.equal("relaxer");
    expect(traveler2.travelerType).to.equal("thrill-seeker");
    expect(traveler3.travelerType).to.equal("shopper");
  })

})
