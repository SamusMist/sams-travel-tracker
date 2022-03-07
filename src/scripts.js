import './css/styles.css';
import './images/turing-logo.png';
import Destinations from './Destinations.js';
import Traveler from './Traveler.js';
import Trips from './Trips.js';
import {fetchData} from './apiCalls.js';
import './images/turing-logo.png';
import{welcome, pendingTripDataDom, annualCostDataDom, pastTripsDom, futureTripsDom, addDestinationSelection} from './domUpdates.js';

//Query Selectors
let adventureForm = document.querySelector('.adventure-form');
let adventureDays = document.querySelector('#adventure-days');
let numTravelers = document.querySelector('#travelers')
let tripEstimateButton = document.querySelector('.trip-estimate');
let estLabel = document.querySelector('.est-label');
let destValue = document.querySelector('#destination');

//Global Variables
let allTravelers;
let traveler;
let allTrips;
let allDestinations;
let tripURL = 'http://localhost:3001/api/v1/trips';

//Promise all, Function invocations
let makePromise = () => {
  Promise.all([fetchData('travelers'), fetchData('trips'), fetchData('destinations')])
  .then(data => {
  let newTraveler = new Traveler(data[0].travelers[43]);
  let newTrip = new Trips(data[1].trips[0]);
  let newDestination = new Destinations(data[2].destinations[0]);
  accessAllData(data[0].travelers, data[1].trips, data[2].destinations)
  welcome(newTraveler);
  pendingTripDataDom(newTraveler, data[1].trips, data[2].destinations);
  annualCostDataDom(newTraveler);
  pastTripsDom(newTraveler, data[1].trips, data[2].destinations);
  futureTripsDom(newTraveler, data[1].trips, data[2].destinations);
  addDestinationSelection(data[2].destinations);
  })
};

//Access Api Data Function
const accessAllData = (travelersData, tripsData, destinationsData) => {
  allTravelers = travelersData.map(traveler => new Traveler(traveler));
  traveler = travelers[43];
  allTrips = tripsData.map(trip => new Trips(trip));
  allDestinations = destinationsData.map(destination => new Destinations(destination));
};

//Post Data to Trips API
const postData = (url, newData) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newData),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    console.log(response, "response")
    if(!response.ok) {
      throw new Error(`Please make sure that all fields are filled in.`);
    } else {
    response.json()
  }
  })
}

//Functions to get the Destination ID matching user selected Destination
const getDestinationID = () => {
  let destinationValue = document.querySelector('#destination');
  console.log(allDestinations[0].destination)
  const destValueID = allDestinations.find(currDest => {
    return currDest.destination === destinationValue.value;
  })
  console.log(destValueID.id)
  return destValueID
}

const findMatchingDest = () => {
  const matchInputDest = allDestinations.find(destination => {
    return destination.destination === destValue.value;
  })
  return matchInputDest;
};

//Get User Input Trip Cost Estimate
const calculateTripEstimate = () => {
  tripEstimateButton.classList.add('hidden');
  let tripEst = 0
  const matchingDest = findMatchingDest();
  const requestedTravelQuote = (adventureDays.value * matchingDest.estLodgingCostDay) +
  (numTravelers.value * matchingDest.estFlightCostPerPerson);
  tripEst = requestedTravelQuote * 1.1;
  return estLabel.innerHTML += `${tripEst}`
};


//Event Listeners
window.addEventListener("onload", makePromise());
tripEstimateButton.addEventListener('click', calculateTripEstimate)
adventureForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newFormEntry = {
    id: Date.now(),
    userID: 44,
    destinationID: getDestinationID().id,
    travelers: formData.get('travelers'),
    date: formData.get('adventure-date').split('-').join('/'),
    duration: formData.get('adventure-days'),
    status: "pending",
    suggestedActivities: []
  }
  postData(tripURL, newFormEntry);
  e.target.reset();
});
