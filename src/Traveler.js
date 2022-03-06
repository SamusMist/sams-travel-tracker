class Traveler {
  constructor(traveler) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.travelerType = traveler.travelerType;
    this.trips = [];
  }

  addUserTrips(allTrips) {
    const getTrip = allTrips.filter(currTrip => {
      if(this.id === currTrip.userID) {
        this.trips.push(currTrip)
      }
      return this.trips;
    })
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

  getPendingTripsByUserID() {
    return this.trips.filter(currTrip => currTrip.status === 'pending');
  }

  calculateApprovedCost() {
    let total = 0;
    const calculatorCostApproved = this.calculateCostYear().forEach(currTrip => {
          total += ((currTrip.destination.estimatedLodgingCostPerDay * currTrip.duration) +
          (currTrip.destination.estimatedFlightCostPerPerson * currTrip.travelers))
      })
      return total * 1.1;
    }

  calculateCostYear() {
    let today = new Date();
    let currYear = new Date(today).getFullYear();
    const getCurrYearTrips = this.trips.filter(currTrip => {
      return currTrip.status === 'approved' && currTrip.date.includes(currYear)
    })
    return getCurrYearTrips;
  }

  reformatDate() {
    let today = new Date()
    let dd = String(today.getDate()).padStart(2, '0')
    let mm = String(today.getMonth() + 1).padStart(2, '0')
    let yyyy = today.getFullYear()
    let newToday = `${mm}/${dd}/${yyyy}`
    return newToday;
  }

  getPastTrips() {
    console.log(this.reformatDate().split('/').reverse().join(''))
    const result = this.trips.filter(currTrip =>  {
      return currTrip.date.split('/').join('') < this.reformatDate().split('/').reverse().join('')
    })
    return result;
  }

  getFutureTrips() {
    const result = this.trips.filter(currTrip =>  {
      return currTrip.date.split('/').join('') > this.reformatDate().split('/').reverse().join('')
    })
    return result;
  }
}

export default Traveler;
