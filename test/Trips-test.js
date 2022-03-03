import { expect } from 'chai';
import trips from '../src/sample-data/Trips-sample.js';
import Trips from '../src/Trips.js';



describe('Trips', () => {
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

  it('should show then number of travelers', () => {
    expect(trip1.numOfTravelers).to.equal(1);
    expect(trip2.numOfTravelers).to.equal(5);
    expect(trip3.numOfTravelers).to.equal(4);
  })

  it('should show the number of travelers', () => {
    expect(trip1.date).to.equal("2022/09/16");
    expect(trip2.date).to.equal("2022/10/04");
    expect(trip3.date).to.equal("2022/05/22");
  })

  it('should show the number of travelers', () => {
    expect(trip1.duration).to.equal(8);
    expect(trip2.duration).to.equal(18);
    expect(trip3.duration).to.equal(17);
  })

  it('should show the status of the trip', () => {
    expect(trip1.status).to.equal('approved');
    expect(trip2.status).to.equal('approved');
    expect(trip3.status).to.equal('pending');
  })

  it('should have an array of suggested activities', () => {
    expect(trip1.suggestedActivities).to.deep.equal([]);
    expect(trip2.suggestedActivities).to.deep.equal([]);
    expect(trip3.suggestedActivities).to.deep.equal([]);
  })
})
