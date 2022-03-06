import './css/styles.css';
import './images/turing-logo.png';
import Destinations from './Destinations.js';
import Traveler from './Traveler.js';
import Trips from './Trips.js';
import {fetchData} from './apiCalls.js';
import './images/turing-logo.png';
import{welcome, pendingTripDataDom, annualCostDataDom, pastTripsDom, futureTripsDom, addDestinationSelection} from './domUpdates.js';

let adventureForm = document.querySelector('.adventure-form');

//global variables
let allTravelers;
let traveler;
let allTrips;
let allDestinations;
let tripURL = 'http://localhost:3001/api/v1/trips';

let makePromise = () => {
  Promise.all([fetchData('travelers'), fetchData('trips'), fetchData('destinations')])
  .then(data => {
  let newTraveler = new Traveler(data[0].travelers[43]);
  // let newTrip = new Trips(data[1].trips[0]);
  // let newDestination = new Destinations(data[2].destinations[0]);
  accessAllData(data[0].travelers, data[1].trips, data[2].destinations)
  welcome(newTraveler);
  pendingTripDataDom(newTraveler, data[1].trips, data[2].destinations);
  annualCostDataDom(newTraveler);
  pastTripsDom(newTraveler, data[1].trips, data[2].destinations);
  futureTripsDom(newTraveler, data[1].trips, data[2].destinations);
  addDestinationSelection(data[2].destinations);
  })
};

const accessAllData = (travelersData, tripsData, destinationsData) => {
  allTravelers = travelersData.map(traveler => new Traveler(traveler));
  traveler = travelers[43];
  allTrips = tripsData.map(trip => new Trip(trip));
  allDestinations = destinationsData.map(destination => new Destination(destination));
};

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


window.addEventListener("onload", makePromise());


const getDestinationID = () => {
  let destinationValue = document.querySelector('#destination');
  allDestinations.destinations.find(currDest => {
    return currDest.name === destinationValue.value;
  })
  return destinationValue
}

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
