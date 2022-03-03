import { expect } from 'chai';
import trips from '../src/sample-data/Trips-sample.js';
import Trips from '../src/Trips.js';



describe('Traveler', () => {
  let trip1, trip2, trip3;

    beforeEach(() => {
      trip1 = new Trips(trips[0]);
      trip2 = new Trips(trips[1]);
      trip3 = new Trips(trips[2]);
    });

  it('should be a function', () => {
    expect(Trips).to.be.a('function');
  })


})
