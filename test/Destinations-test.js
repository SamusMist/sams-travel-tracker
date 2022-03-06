import { expect } from 'chai';
import destinations from '../src/sample-data/Destinations-sample.js';
import Destinations from '../src/Destinations.js';


describe('Destinations', () => {
  let destination1, destination2, destination3

    beforeEach(() => {
      destination1 = new Destinations(destinations[0]);
    });

  it('should be a function', () => {
    expect(Destinations).to.be.a('function');
  })

  it('should have a destination id', () => {
    expect(destination1.id).to.equal(49);
  })

  it('should have a location', () => {
    expect(destination1.destination).to.equal('Lima, Peru');
  })

  it('should have an estimated lodging cost', () => {
    expect(destination1.estLodgingCostDay).to.equal(70);
  })

  it('should have an estimated flight cost per person', () => {
    expect(destination1.estFlightCostPerPerson).to.equal(400);
  })

  it('should have an image of the destination and an alt tag', () => {
    expect(destination1.image).to.equal("https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");

    expect(destination1.alt).to.equal("overview of city buildings with a clear sky");
  })
})
