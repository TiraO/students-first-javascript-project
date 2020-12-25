class ClimbingWall {
  constructor(stage) {

  }

  addHold() {

  }


}

class ClimberControls {
  constructor(spine) {
    this.spine = spine;
    this.selectedLimb = null;
    this.selectableLimbs = ["rear-upper-arm", "front-upper-arm", "front-thigh", "rear-thigh"];
  }

  selectLimb(limbName) {
    this.selectedLimb = limbName;
  }

  deselectLimb(){
    this.selectedLimb = null;
  }

  moveLimb(mouse){
    let armContainer = climber.slotContainers[climber.skeleton.findSlotIndex(this.selectedLimb)];
    let shoulder = armContainer.getGlobalPosition({x: 0, y: 0});
    let shoulderOffset = {
      x: mouse.x - shoulder.x,
      y: mouse.y - shoulder.y
    }
    // !! spine has backwards angles.
    let shoulderAngleRadians = Math.atan2(shoulderOffset.y, shoulderOffset.x) - 4.36;
    let armLength = 90;
    let upperArm = climber.skeleton.findSlot(this.selectedLimb);
    upperArm.bone.rotation = -1 * (shoulderAngleRadians * 180 / Math.PI);
    let shoulderToTarget = distance(mouse, shoulder);
    if (shoulderToTarget < armLength) {
      let upperArmLength = armLength / 2;
      let armBendRadians = Math.acos((shoulderToTarget / 2) / upperArmLength);
      upperArm.bone.rotation += 2 * radiansToRotation(armBendRadians);
      upperArm.bone.children[0].rotation = -2 * radiansToRotation(armBendRadians)
    }
  }
}

let initialize = () => {
  const app = new PIXI.Application();
  document.body.appendChild(app.view);

// load spine data
  app.loader
  .add('climber', 'spineboy-pro.json')
  .load(onAssetsLoaded);

  app.stage.interactive = true;
  app.stage.buttonMode = true;

  function onAssetsLoaded(loader, assets) {
    const climber = new PIXI.spine.Spine(assets.climber.spineData);

    // set current skin
    climber.skeleton.setSkinByName('default');
    climber.skeleton.setSlotsToSetupPose();
    // set the position
    climber.x = 100;
    climber.y = 600;

    climber.scale.set(0.5);

    // play animation
    // climber.state.setAnimation(0, 'walk', true);
    // climber.state.setAnimation(0, 'walk', false);
    // climber.state.setEmptyAnimation(1, 10);

    app.stage.addChild(climber);

    console.log("slots", climber.skeleton.slots.map(slot => slot.data.name));
    window.climber = climber;
    climber.skeleton.findSlot("head").bone.scaleX = 0.5
    climber.skeleton.findSlot("head").bone.scaleY = 0.5
    let upperArm = climber.skeleton.findSlot("front-upper-arm");
    upperArm.bone.rotation = -90;

    let climberControls = new ClimberControls(climber);
    climberControls.selectLimb("front-upper-arm");

    app.stage.on('pointermove', (event) => {
      let mouse = event.data.global;

      if(climberControls.selectedLimb){
        climberControls.moveLimb(mouse);
      }
    });

    app.stage.on('pointertap', (event) => {
      let mouse = event.data.global;
      let hitLimb = getHitLimb(climber, mouse);
      if (hitLimb) {
        climberControls.selectLimb(hitLimb)
      } else {
        climberControls.deselectLimb();
      }
    });
  }


}

let getHitLimb = (climber, point) =>{
  let hitSlotIndex = climber.slotContainers.findIndex((container)=>{
    return distance(container.getGlobalPosition({x: 0, y: 0}), point) < 30;
  })

  if(hitSlotIndex > -1) {
    let slotName = climber.skeleton.slots[hitSlotIndex].data.name;
    console.log("hit ", slotName)
    return slotName;
  } else {
    return null;
  }
}
let distance = (pointA, pointB) => {
  return Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2));
}
let radiansToRotation = (radians) => -1 * radians * 180 / Math.PI


window.addEventListener('load', initialize);