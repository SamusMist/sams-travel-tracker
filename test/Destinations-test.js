import { expect } from 'chai';
import destinations from '../src/sample-data/Destinations-sample.js';
import Destinations from '../src/Destinations.js';


describe('Destinations', () => {
  let destination1, destination2, destination3

    beforeEach(() => {
      destination1 = new Destinations(destinations[0]);
      destination2 = new Destinations(destinations[1]);
      destination3 = new Destinations(destinations[2]);
    });

  it('should be a function', () => {
    expect(Destinations).to.be.a('function');
  })

  it('should have a destination id', () => {
    expect(destination1.id).to.equal(1);
    expect(destination2.id).to.equal(2);
    expect(destination3.id).to.equal(3);
  })

  it('should have a location', () => {
    expect(destination1.destination).to.equal('Lima, Peru');
    expect(destination2.destination).to.equal('Stockholm, Sweden');
    expect(destination3.destination).to.equal('Sydney, Austrailia');
  })
})
