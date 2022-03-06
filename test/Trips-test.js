import { expect } from 'chai';
import trips from '../src/sample-data/Trips-sample.js';
import Trips from '../src/Trips.js';



describe('Trips', () => {
  let trip1

    beforeEach(() => {
      trip1 = new Trips(trips[0]);
    });

  it('should be a function', () => {
    expect(Trips).to.be.a('function');
  })

  it('should hold a user ID', () => {
    expect(trip1.userID).to.equal(1);
  })

  it('should hold a destination ID', () => {
    expect(trip1.destinationID).to.equal(49);

  })

  it('should show then number of travelers', () => {
    expect(trip1.numOfTravelers).to.equal(1);
  })

  it('should show the number of travelers', () => {
    expect(trip1.date).to.equal("2022/09/16");
  })

  it('should show the number of travelers', () => {
    expect(trip1.duration).to.equal(8);
  })

  it('should show the status of the trip', () => {
    expect(trip1.status).to.equal('approved');
  })

  it('should have an array of suggested activities', () => {
    expect(trip1.suggestedActivities).to.deep.equal([]);
  })
})
