import Traveler from './Traveler.js';

let mainData = document.querySelector('.main-data');
let pastTrips = document.querySelector('.past-trips');
let presentTrips = document.querySelector('.present-trips');
let futureTrips = document.querySelector('.future-trips');
let pending = document.querySelector('.pending');
let yearCost = document.querySelector('.annual-cost');


const pendingTripDataDom = (person, tripData, destData) => {
  person.addUserTrips(tripData);
  person.addDestinationToTrip(destData);
  person.getPendingTripsByUserID().forEach(trip => {
    pending.innerHTML += `
    <div class="pending-data">
      <p>${trip.date}</p>
      <p>${trip.duration} days</p>
      <p>${trip.travelers} travelers</p>
      <p>${trip.destination.destination}</p>
      <img src="${trip.destination.image} alt=${trip.destination.alt}">
    </div>
    `

  })
}

const annualCostDataDom = (person) => {
    yearCost.innerHTML += `
    <div class="annual-cost">
    <p>${person.calculateApprovedCost()}</p>
    </div>
    `

}

// const pastTripsDom = () => {
//   pastTrips.innerHTML += `
//   <p>${method that shows all users past trips}</p>
//   `
// }
//
// const presentTripsDom = () => {
//   presentTrips.innerHTML += `
//   <p>${method that shows all users present trips}</p>
//   `
// }
// const futureTripsDom = () => {
//   futureTrips.innerHTML += `
//   <p>${method that shows all users future trips}</p>
//   `
// }

export {pendingTripDataDom, annualCostDataDom}
