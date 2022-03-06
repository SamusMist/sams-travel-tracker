import './css/styles.css';
import './images/turing-logo.png';
import Destinations from './Destinations.js';
import Traveler from './Traveler.js';
import Trips from './Trips.js';
import {fetchData} from './apiCalls.js';
import './images/turing-logo.png';
import{welcome, pendingTripDataDom, annualCostDataDom, pastTripsDom, futureTripsDom, addDestinationSelection} from './domUpdates.js'


let makePromise = () => {
  Promise.all([fetchData('travelers'), fetchData('trips'), fetchData('destinations')])
  .then(data => {
  let newTraveler = new Traveler(data[0].travelers[43]);
  let newTrip = new Trips(data[1].trips[0]);
  let newDestination = new Destinations(data[2].destinations[0]);
  welcome(newTraveler);
  pendingTripDataDom(newTraveler, data[1].trips, data[2].destinations);
  annualCostDataDom(newTraveler);
  pastTripsDom(newTraveler, data[1].trips, data[2].destinations);
  futureTripsDom(newTraveler, data[1].trips, data[2].destinations);
  addDestinationSelection(data[2].destinations);
  })
};


window.addEventListener("onload", makePromise());
