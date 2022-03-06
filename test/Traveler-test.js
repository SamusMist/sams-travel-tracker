import { expect } from 'chai';
import traveler from '../src/sample-data/Traveler-sample.js';
import trips from '../src/sample-data/Trips-sample.js';
import destinations from '../src/sample-data/Destinations-sample.js';
import Traveler from '../src/Traveler.js';

describe('Traveler', () => {
  let traveler1

    beforeEach(() => {
      traveler1 = new Traveler(traveler[0]);
    });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  })

  it('should have an id', () => {
    expect(traveler1.id).to.equal(1);
  })

  it('should have a name', () => {
    expect(traveler1.name).to.equal("Ham Leadbeater");
  })

  it('should have a traveler type', () => {
    expect(traveler1.travelerType).to.equal("relaxer");
  })

  it('should add all users trips to new trip property array', () => {
    traveler1.addUserTrips(trips);
    expect(traveler1.trips).to.deep.equal([{
    "id": 1,
    "userID": 1,
    "destinationID": 49,
    "travelers": 1,
    "date": "2022/09/16",
    "duration": 8,
    "status": "approved",
    "suggestedActivities": []
    },
    {
    "id": 2,
    "userID": 1,
    "destinationID": 25,
    "travelers": 5,
    "date": "2022/10/04",
    "duration": 18,
    "status": "approved",
    "suggestedActivities": []
    },
    {
    "id": 3,
    "userID": 1,
    "destinationID": 22,
    "travelers": 4,
    "date": "2022/05/22",
    "duration": 17,
    "status": "pending",
    "suggestedActivities": []
    },
    {
    "id": 4,
    "userID": 1,
    "destinationID": 14,
    "travelers": 2,
    "date": "2022/02/25",
    "duration": 10,
    "status": "approved",
    "suggestedActivities": []
    },
    {
    "id": 5,
    "userID": 1,
    "destinationID": 29,
    "travelers": 3,
    "date": "2022/04/30",
    "duration": 18,
    "status": "approved",
    "suggestedActivities": []
    },
    {
    "id": 6,
    "userID": 1,
    "destinationID": 35,
    "travelers": 3,
    "date": "2020/06/29",
    "duration": 9,
    "status": "approved",
    "suggestedActivities": []
    },
    {
    "id": 7,
    "userID": 1,
    "destinationID": 17,
    "travelers": 5,
    "date": "2020/5/28",
    "duration": 20,
    "status": "approved",
    "suggestedActivities": []
    }])
  })

  it('should link a destination to a trip via new property', () => {
    traveler1.addUserTrips(trips);
    traveler1.addDestinationToTrip(destinations);
    expect(traveler1.trips[0].destination).to.deep.equal({
    "id": 49,
    "destination": "Lima, Peru",
    "estimatedLodgingCostPerDay": 70,
    "estimatedFlightCostPerPerson": 400,
    "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
    "alt": "overview of city buildings with a clear sky"
    })
  })

  it('should get all pending trips for user', () => {
    traveler1.addUserTrips(trips);
    expect(traveler1.getPendingTripsByUserID()).to.deep.equal([traveler1.trips[2]])
  })

})
