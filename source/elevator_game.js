{
  init: function(elevators, floors) {



    let sortQueue = (elevator)=>{

      let sameDistanceAway = (destination1, destination2)=>{
        let distanceToDestination1 = Math.abs(destination1 - elevator.currentFloor)
        let distanceToDestination2 = Math.abs(destination2 - elevator.currentFloor)
        if(distanceToDestination1 == distanceToDestination2){
          return true
        } else {
          return false
        }

      }

      let compareDestinations = (destination1, destination2)=>{
        if(isCloser(destination1, destination2)){
          return -1
        } else if(sameDistanceAway(destination1, destination2)){
          return 0
        } else {
          return 1
        }

      }
      elevator.destinationQueue.sort()
      elevator.checkDestinationQueue();
    }

    elevators.forEach(
      (elevator)=>{
        elevator.on("idle", function() {
          // let's go to all the floors (or did we forget one?)
          elevator.goToFloor(0);

        });
        elevator.on("floor_button_pressed", function(floorNum) {
          elevator.goToFloor(floorNum);
          sortQueue(elevator)
        });
        floors.forEach(
          (floor)=>{
            floor.on("up_button_pressed", function() {
              if(elevator.loadFactor() < 0.6) {
                elevator.goToFloor(floor.floorNum())
                sortQueue(elevator)
              }
            });
            floor.on("down_button_pressed", function() {
              if(elevator.loadFactor() < 0.6) {
                elevator.goToFloor(floor.floorNum())
                sortQueue(elevator)
              }
            });
          }
        )

      }
    )

    // Whenever the elevator is idle (has no more queued destinations) ...

  },
  update: function(dt, elevators, floors) {
    // We normally don't need to do anything here
  }
}