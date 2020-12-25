class ClimbingWall {
  constructor(stage) {

  }

  addHold() {

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

    app.stage.on('pointermove', (event) => {
      climber.skeleton.findSlot("head").bone.scaleX = 0.5
      climber.skeleton.findSlot("head").bone.scaleY = 0.5
      let upperArm = climber.skeleton.findSlot("front-upper-arm");
      upperArm.bone.rotation = -90;
      let canvasClick = event.data.global;
      console.log(canvasClick, "canvasClick")
      let upperArmContainer = climber.slotContainers[climber.skeleton.findSlotIndex("front-upper-arm")];
      let shoulderPosition = upperArmContainer.getGlobalPosition({x: 0, y: 0});
      console.log("upperArmContainer.getGlobalPosition({x: 0, y: 0})",)
      let shoulderOffset = {
        x: canvasClick.x - shoulderPosition.x,
        y: canvasClick.y - shoulderPosition.y
      }
      let shoulderAngleRadians = Math.atan2(shoulderOffset.y, shoulderOffset.x);
      upperArm.bone.rotation = 250 - (shoulderAngleRadians * 180 / Math.PI);
    });
  }

}


window.addEventListener('load', initialize);