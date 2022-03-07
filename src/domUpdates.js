import Traveler from './Traveler.js';

let welcomeUser = document.querySelector('.welcome');
let mainData = document.querySelector('.main-data');
let pastTrips = document.querySelector('.past-trips');
let presentTrips = document.querySelector('.present-trips');
let futureTrips = document.querySelector('.future-trips');
let pending = document.querySelector('.pending');
let yearCost = document.querySelector('.annual-cost');
let destinationsDropDown = document.querySelector('#destination');
let tripEstimateButton = document.querySelector('.trip-estimate');
let estLabel = document.querySelector('.est-label');

const welcome = (person) => {
  welcomeUser.innerHTML += `
  <h1>Welcome, ${person.name}!</h1>
  `
}

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
      <img src="${trip.destination.image}" alt="${trip.destination.alt}">
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

const pastTripsDom = (person, tripData, destData) => {
  person.addUserTrips(tripData);
  person.addDestinationToTrip(destData);
  person.getPastTrips().forEach(currTrip => {
    pastTrips.innerHTML += `
    <p>${currTrip.date}</p>
    <p>${currTrip.duration} days</p>
    <p>${currTrip.travelers} travelers</p>
    <p>${currTrip.destination.destination}</p>
    <img src="${currTrip.destination.image}" alt="${currTrip.destination.alt}">
    </div>
    `
  })
}

const futureTripsDom = (person, tripData, destData) => {
  person.addUserTrips(tripData);
  person.addDestinationToTrip(destData);
  person.getFutureTrips().forEach(currTrip => {
    futureTrips.innerHTML += `
    <p>${currTrip.date}</p>
    <p>${currTrip.duration} days</p>
    <p>${currTrip.travelers} travelers</p>
    <p>${currTrip.destination.destination}</p>
    <img src="${currTrip.destination.image}" alt="${currTrip.destination.alt}">
    </div>
    `
  })
}

const addDestinationSelection = (destinations) => {
  let destinationElement;
    const getDestination = destinations.forEach(currDest => {
      destinationElement = document.createElement('option');
      destinationElement.innerText = currDest.destination;
      destinationElement.value = currDest.destination;
      destinationsDropDown.appendChild(destinationElement);
    });
};

const resetDom = () => {
  pending.innerHTML = '';
  welcomeUser.innerHTML = '';
  yearCost.innerHTML = '';
  pastTrips.innerHTML = '';
  futureTrips.innerHTML = '';
  destinationsDropDown.innerHTML = '';
  estLabel.innerHTML = 'estimated cost:';
  tripEstimateButton.classList.remove('hidden');
}
export {welcome, pendingTripDataDom, annualCostDataDom, pastTripsDom, futureTripsDom, addDestinationSelection, resetDom}
