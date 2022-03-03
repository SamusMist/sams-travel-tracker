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

  it('should hold a user ID', () => {
    expect(trip1.userID).to.equal(1);
    expect(trip2.userID).to.equal(2);
    expect(trip3.userID).to.equal(3);
  })

  it('should hold a destination ID', () => {
    expect(trip1.destinationID).to.equal(49);
    expect(trip2.destinationID).to.equal(25);
    expect(trip3.destinationID).to.equal(22);
  })
})
