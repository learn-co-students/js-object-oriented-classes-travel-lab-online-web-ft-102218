let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }  

  yearsExperienceFromBeginningOf(year) {
    let date = new Date( year, 1, 1 ) - this.startDate;    
    return parseInt(date / (365 * 24 * 60 * 60 * 1000));
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  streetIndex( avenue ) {
    return eastWest.indexOf( avenue );
  }
  
  blocksTravelled() {
    let horizontalDistance =
      this.streetIndex(this.endingLocation.horizontal) -
      this.streetIndex(this.beginningLocation.horizontal);
    let verticalDistance =
      this.endingLocation.vertical - this.beginningLocation.vertical;
    return Math.abs(horizontalDistance) + Math.abs(verticalDistance);
  }

  estimatedTime(peak) {
    return peak ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3;
  }
}

