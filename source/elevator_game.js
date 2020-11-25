/*
Next step is to move load balancing into the chooseElevator function and actually write isEquallyGood
 */

let a = {

  init: function (elevators, floors) {


    let chooseElevator = (elevators, floor) => {
      let isBetter = (elevator1, elevator2) => {
        let distanceToElevator1 = Math.abs(elevator1 - floor.floorNum())
        let distanceToElevator2 = Math.abs(elevator2 - floor.floorNum())
        if (distanceToElevator1 < distanceToElevator2) {
          return true
        } else {
          return false
        }
      }

      let isEquallyGood = (elevator1, elevator2)=>{
        return false
      }

      let compareElevators = (elevator1, elevator2) => {
        if (isBetter(elevator1, elevator2)) {
          return -1
        } else if (isEquallyGood(elevator1, elevator2)) {
          return 0
        } else {
          return 1
        }
      }

      elevators.sort(compareElevators)
      return elevators[0]
    }


    let sortQueue = (elevator) => {

      let isCloser = (destination1, destination2) => {
        let distanceToDestination1 = Math.abs(destination1 - elevator.currentFloor)
        let distanceToDestination2 = Math.abs(destination2 - elevator.currentFloor)
        if (distanceToDestination1 < distanceToDestination2) {
          return true
        } else {
          return false
        }
      }

      let sameDistanceAway = (destination1, destination2) => {
        let distanceToDestination1 = Math.abs(destination1 - elevator.currentFloor)
        let distanceToDestination2 = Math.abs(destination2 - elevator.currentFloor)
        if (distanceToDestination1 == distanceToDestination2) {
          return true
        } else {
          return false
        }
      }

      let compareDestinations = (destination1, destination2) => {
        if (isCloser(destination1, destination2)) {
          return -1
        } else if (sameDistanceAway(destination1, destination2)) {
          return 0
        } else {
          return 1
        }

      }
      elevator.destinationQueue.sort(compareDestinations)
      elevator.checkDestinationQueue();
    }

    elevators.forEach(
      (elevator) => {
        elevator.on("idle", function () {
          // let's go to all the floors (or did we forget one?)
          elevator.goToFloor(0);

        });
        elevator.on("floor_button_pressed", function (floorNum) {
          elevator.goToFloor(floorNum);
          sortQueue(elevator)
        });

      }
    )

    floors.forEach(
      (floor) => {
        floor.on("up_button_pressed", function () {
          let elevator = chooseElevator(elevators, floor)
          if (elevator.loadFactor() < 0.6) {
            elevator.goToFloor(floor.floorNum())
            sortQueue(elevator)
          }
        });
        floor.on("down_button_pressed", function () {
          let elevator = chooseElevator(elevators, floor)
          if (elevator.loadFactor() < 0.6) {
            elevator.goToFloor(floor.floorNum())
            sortQueue(elevator)
          }
        });
      }
    )

    // Whenever the elevator is idle (has no more queued destinations) ...

  },
  update: function (dt, elevators, floors) {
    // We normally don't need to do anything here
  }
}