import './css/styles.css';
import './images/turing-logo.png';
import Destinations from './Destinations.js';
import Traveler from './Traveler.js';
import Trips from './Trips.js';
import {fetchData, postData} from './apiCalls.js';
import './images/turing-logo.png';
import {welcome, pendingTripDataDom, annualCostDataDom, pastTripsDom, futureTripsDom, addDestinationSelection, resetDom} from './domUpdates.js';

//Query Selectors
let adventureForm = document.querySelector('.adventure-form');
let adventureDate = document.querySelector('#adventure-date');
let adventureDays = document.querySelector('#adventure-days');
let numTravelers = document.querySelector('#travelers')
let tripEstimateButton = document.querySelector('.trip-estimate');
let estLabel = document.querySelector('.est-label');
let destValue = document.querySelector('#destination');
let submitRequest = document.querySelector('.submit-request')

//Global Variables
let allTravelers;
let newTraveler;
let allTrips;
let allDestinations;
let tripURL = 'http://localhost:3001/api/v1/trips';

//Promise all, Function invocations
let makePromise = () => {
  Promise.all([fetchData('travelers'), fetchData('trips'), fetchData('destinations')])
  .then(data => {
  accessAllData(data[0].travelers, data[1].trips, data[2].destinations)
  domHandler()
  })
};

const domHandler = () => {
  welcome(newTraveler);
  pendingTripDataDom(newTraveler, allTrips, allDestinations);
  annualCostDataDom(newTraveler);
  pastTripsDom(newTraveler, allTrips, allDestinations);
  futureTripsDom(newTraveler, allTrips, allDestinations);
  addDestinationSelection(allDestinations);
}

//Access Api Data Function
const accessAllData = (travelersData, tripsData, destinationsData) => {
  allTravelers = travelersData.map(traveler => new Traveler(traveler));
  newTraveler = allTravelers[43];
  allTrips = tripsData;
  allDestinations = destinationsData;
};

//Functions to get the Destination ID matching user selected Destination
const getDestinationID = () => {
  let destinationValue = document.querySelector('#destination');
  const destValueID = allDestinations.find(currDest => {
    return currDest.destination === destinationValue.value;
  })
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
  const requestedTravelQuote = (adventureDays.value * matchingDest.estimatedLodgingCostPerDay) +
  (numTravelers.value * matchingDest.estimatedFlightCostPerPerson);
  tripEst = requestedTravelQuote * 1.1;
  return estLabel.innerHTML += `${tripEst}`
};

//Post new data and recall promise
const getPostData = (e) => {
  e.preventDefault();
  const newFormEntry = {
    id: Date.now(),
    userID: 44,
    destinationID: getDestinationID().id,
    travelers: parseInt(travelers.value),
    date: adventureDate.value.split('-').join('/'),
    duration: parseInt(adventureDays.value),
    status: "pending",
    suggestedActivities: []
  }
  e.target.reset();
  postData(tripURL, newFormEntry).then(data => {
    resetDom();
    makePromise();
  })
}

//Event Listeners
window.addEventListener("onload", makePromise());
tripEstimateButton.addEventListener('click', calculateTripEstimate);
adventureForm.addEventListener('submit', getPostData);
