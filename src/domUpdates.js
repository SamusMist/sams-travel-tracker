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

//Show and hide toggle functions
const show = (selector) => {
  selector.classList.remove('hidden');
}

const hide = (selector) => {
  selector.classList.add('hidden');
}

//DOM update functions
const welcome = (person) => {
  welcomeUser.innerHTML += `
  <p>${person.name}!</p>
  `
}

const addTripDataToTraveler = (person, tripData, destData) => {
  person.addUserTrips(tripData);
  person.addDestinationToTrip(destData);
}

const pendingTripDataDom = (person) => {
  // person.addUserTrips(tripData);
  // person.addDestinationToTrip(destData);
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
    <p class="cost">$${person.calculateApprovedCost()}</p>
    </div>
    `
}

const pastTripsDom = (person) => {
  person.getPastTrips().forEach(currTrip => {
    pastTrips.innerHTML += `
    <div class="past-data">
      <p>${currTrip.date}</p>
      <p>${currTrip.duration} days</p>
      <p>${currTrip.travelers} travelers</p>
      <p>${currTrip.destination.destination}</p>
      <img src="${currTrip.destination.image}" alt="${currTrip.destination.alt}">
    </div>
    `
  })
}

const futureTripsDom = (person) => {
  person.getFutureTrips().forEach(currTrip => {
    futureTrips.innerHTML += `
    <div class="future-data">
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
  estLabel.innerHTML = '';
}

const validateLogin = () => {
  const loginPage = document.querySelector('.login-page');
  const bookingPage = document.querySelector('.booking-page');
  hide(loginPage);
  show(bookingPage);
}
export {welcome, pendingTripDataDom, annualCostDataDom, pastTripsDom, futureTripsDom, addDestinationSelection, resetDom, show, hide, validateLogin, addTripDataToTraveler}
