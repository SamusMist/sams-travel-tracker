class Destinations {
  constructor(destination) {
    this.id = destination.id;
    this.destination = destination.destination;
    this.estLodgingCost = destination.estimatedLodgingCostPerDay;
    this.estFlightCostPerPerson = destination.estimatedFlightCostPerPerson;
    this.image = destination.image;
  }
}
export default Destinations;
