class Trips {
  constructor(trip) {
    this.id = trip.id;
    this.userID = trip.userID;
    this.destinationID = trip.destinationID;
    this.numOfTravelers = trip.travelers;
    this.date = trip.date
  }
}

export default Trips;
