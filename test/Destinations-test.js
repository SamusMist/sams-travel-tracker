import { expect } from 'chai';
import destinations from '../src/sample-data/Destinations-sample.js';
import Destinations from '../src/Destinations.js';


describe('Destinations', () => {
  let destination1, destination2, destination3

    beforeEach(() => {
      destination1 = new Destinations(destinations[0]);
      destination2 = new Destinations(destinations[1]);
      destination3 = new Destinations(destinations[2]);
    });

  it('should be a function', () => {
    expect(Destinations).to.be.a('function');
  })

  it('should have a destination id', () => {
    expect(destination1.id).to.equal(1);
    expect(destination2.id).to.equal(2);
    expect(destination3.id).to.equal(3);
  })

  it('should have a location', () => {
    expect(destination1.destination).to.equal('Lima, Peru');
    expect(destination2.destination).to.equal('Stockholm, Sweden');
    expect(destination3.destination).to.equal('Sydney, Austrailia');
  })

  it('should have an estimated lodging cost', () => {
    expect(destination1.estLodgingCostDay).to.equal(70);
    expect(destination2.estLodgingCostDay).to.equal(100);
    expect(destination3.estLodgingCostDay).to.equal(130);
  })

  it('should have an estimated flight cost per person', () => {
    expect(destination1.estFlightCostPerPerson).to.equal(400);
    expect(destination2.estFlightCostPerPerson).to.equal(780);
    expect(destination3.estFlightCostPerPerson).to.equal(950);
  })

  it('should have an image of the destination and an alt tag', () => {
    expect(destination1.image).to.equal("https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
    expect(destination2.image).to.equal("https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
    expect(destination3.image).to.equal("https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");

    expect(destination1.alt).to.equal("overview of city buildings with a clear sky");
    expect(destination2.alt).to.equal("city with boats on the water during the day time");
    expect(destination3.alt).to.equal("opera house and city buildings on the water with boats");
  })
})
