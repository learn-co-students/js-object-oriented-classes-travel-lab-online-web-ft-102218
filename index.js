class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    let x = new Date(year, 1, 1).getFullYear();
    return x - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  // it('calculates the number of blocksTravelled', function() {
  //   let route = new Route(
  //     { horizontal: 'Park', vertical: '34' },
  //     { horizontal: 'Park', vertical: '45' }
  //   );
  //   expect(route.blocksTravelled()).to.equal(11);

  blocksTravelled() {
    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];
    let vertical = Number(this.endingLocation['vertical']) - Number(this.beginningLocation['vertical']);;
    let horizontal = eastWest.indexOf(this.endingLocation['horizontal']) - eastWest.indexOf(this.beginningLocation['horizontal']);
    return vertical + horizontal;
  }

  estimatedTime(peak = false) {
    let blocks = this.blocksTravelled();
    return peak === false ? blocks / 3 : blocks / 2;
  }
}
