// Code your solution in this file!



function distanceFromHqInBlocks(pickUpLocation, dropOffLocation = 42) {
            if(pickUpLocation < dropOffLocation) {
                return dropOffLocation - pickUpLocation
            }
                    
            else {
                return  pickUpLocation - dropOffLocation;
            }
}



function distanceFromHqInFeet(pickUpLocation, destination) {
            return distanceFromHqInBlocks(pickUpLocation, destination) * 264;
                
}

function distanceTravelledInFeet(pickUpLocation, dropOffLocation) {
            return distanceFromHqInFeet(pickUpLocation, dropOffLocation);
}

function calculatesFarePrice(pickUpLocation, dropOffLocation) {
            let distance = distanceTravelledInFeet(pickUpLocation, dropOffLocation) 
                if (distance <= 400) {
                    return 0
                }
                else if (distance >= 400, distance <= 2000  ) {
                    return (distance - 400)* 0.02 
                }
                else if (distance > 2000, distance <= 2500) {
                    return 25
                }
                else {
                    return 'cannot travel that far'
                }
            
}