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

    addUserTrips(allTrips) {
      const getTrip = allTrips.filter(currTrip => {
        if(this.id === currTrip.userID) {
          this.trips.push(currTrip)
        }
        return this.trips
      })
    }

  getPendingTripsByUserID() {
    return this.trips.filter(currTrip => currTrip.status === 'pending');
  }

  // matchDestInfoToTrip() {
  //   let destInfo = []
  //   this.getPendingTripsByUserID().forEach(currPendTrip => {
  //     this.destinations.forEach(currDest => {
  //       if(currDest.id === currPendTrip.destinationID) {
  //         destInfo.push(currDest)
  //       }
  //     })
  //   })
  //   return destInfo
  // }

  calculateApprovedCost() {
    let total = 0;
    const calculatorCostApproved = this.calculateCostYear().forEach(currTrip => {
          total += ((currTrip.destination.estimatedLodgingCostPerDay * currTrip.duration) +
          (currTrip.destination.estimatedFlightCostPerPerson * currTrip.travelers))
      })
      return total;
    }

  calculateCostYear() {
    let today = new Date();
    let currYear = new Date(today).getFullYear();
    const getCurrYearTrips = this.trips.filter(currTrip => {
      return currTrip.status === 'approved' && currTrip.date.includes(currYear)
    })
    console.log(getCurrYearTrips)
    return getCurrYearTrips
  }
}

export default Traveler;
