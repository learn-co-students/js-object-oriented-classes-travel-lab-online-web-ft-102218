class Driver {
    constructor(name, dayJoined) {
        this.name = name
        this.dayJoined = dayJoined
        this.startDate = new Date(this.dayJoined)
    }

    yearsExperienceFromBeginningOf(year) {
        return year - this.startDate.getFullYear()
    }
}

let eastWest = [
    '1st Avenue',
    '2nd Avenue',
    '3rd Avenue',
    'Lexington Avenue',
    'Park',
    'Madison Avenue',
    '5th Avenue'
];

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation
        this.endingLocation = endingLocation
    }

    blocksTravelled() {
        let hStart = this.beginningLocation['horizontal']
        let vStart = this.beginningLocation['vertical']
        let hEnd = this.endingLocation['horizontal']
        let vEnd = this.endingLocation['vertical']

        if(vStart == vEnd) {
            return eastWest.indexOf(hEnd) - eastWest.indexOf(hStart)
        } else if(hStart == hEnd) {
            return vEnd - vStart
        } else {
            return (vEnd - vStart) + (eastWest.indexOf(hEnd) - eastWest.indexOf(hStart))
        }
        
    }

    estimatedTime(peak = false) {
        if(peak) {
            return this.blocksTravelled() / 2
        } else {
            return this.blocksTravelled() / 3
        }
    }
}