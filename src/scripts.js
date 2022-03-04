import './css/styles.css';
import './images/turing-logo.png';
import Destinations from './Destinations.js';
import Traveler from './Traveler.js';
import Trips from './Trips.js';
import {fetchData} from './apiCalls.js';
import './images/turing-logo.png';
import{pendingTripDataDom} from './domUpdates.js'
// import {} from './domUpdates.js'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)

let makePromise = () => {
  Promise.all([fetchData('travelers'), fetchData('trips'), fetchData('destinations')]).then(data => {
  let newTraveler = new Traveler(data[0].travelers[6]);
  let newTrip = new Trips(data[1].trips[0]);
  let newDestination = new Destinations(data[2].destinations[0]);
  pendingTripDataDom(newTraveler, data[1].trips, data[2].destinations);
  })
};


window.addEventListener("onload", makePromise());
