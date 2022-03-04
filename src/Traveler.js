class Traveler {
  constructor(traveler) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.travelerType = traveler.travelerType;
    this.trips = [];
  }

  addDestinationToTrip(allDest) {
    const getTrip = this.trips.filter(currTrip => this.id === currTrip.userID);
    getTrip.forEach(trip => {
      allDest.forEach(dest => {
        if(dest.id === trip.destinationID) {
          trip.destination = dest
          }
        })
      })
    }


  getPendingTripsByUserID(allTrips) {
    const getTrip = allTrips.filter(currTrip => this.id === currTrip.userID);
    getTrip.forEach(trip => {
      if(trip.status === 'pending'){
        this.trips.push(trip)
      }
    })
    return this.trips
  }

  matchDestInfoToTrip() {
    let destInfo = []
    this.getPendingTripsByUserID().forEach(currPendTrip => {
      this.destinations.forEach(currDest => {
        if(currDest.id === currPendTrip.destinationID) {
          destInfo.push(currDest)
        }
      })
    })
    return destInfo
  }

  annualCost() {
    const result = this.trips.forEach(currTrip => {
        if(currTrip.destination.id === currTrip.destinationID) {
          currTrip.totalCost = currTrip.destination.estimatedLodgingCostPerDay + currTrip.destination.estimatedFlightCostPerPerson
        }
      })
    }
}

export default Traveler;
