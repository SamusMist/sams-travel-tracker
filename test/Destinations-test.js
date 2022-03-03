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

})
