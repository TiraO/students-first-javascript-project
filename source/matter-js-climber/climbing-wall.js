// from Matter-js Github
var Example = Example || {};

Example.climbingWall = function() {
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    Common = Matter.Common,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite,
    Bodies = Matter.Bodies,
    Events = Matter.Events;

  // create engine
  var engine = Engine.create(),
    world = engine.world;

  // create renderer
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 800,
      height: 600,
      showAngleIndicator: true
    }
  });

  Render.run(render);

  // create runner
  var runner = Runner.create();
  Runner.run(runner, engine);


  // // add damped soft global constraint
  var body = Bodies.polygon(400, 100, 4, 30);

  var constraint = Constraint.create({
    pointA: { x: 400, y: 120 },
    bodyB: body,
    pointB: { x: -10, y: -10 },
    stiffness: 0.001,
    damping: 0.05
  });

  Composite.add(world, [body, constraint]);

  // add revolute multi-body constraint
  let bodyHeight = 140;
  let bodyWidth = 90;
  var body = Bodies.rectangle(500, 400, bodyHeight, bodyWidth, { collisionFilter: { group: -1 } });
  var head = Bodies.circle(600, 400, 20, { collisionFilter: { group: -1 } });

  var neckConstraint = Constraint.create({
    bodyA: body,
    pointA: {x: -1*bodyHeight/2 - 10, y:5},
    length: 30,
    bodyB: head,
    // angularStiffness: 1,
    stiffness: 0.1,
    angle: 0

  });
  var neckConstraint2 = Constraint.create({
    bodyA: body,
    pointA: {x: -1*bodyHeight/2 - 10, y:-5},
    length: 30,
    bodyB: head,
    // angularStiffness: 1,
    stiffness: 0.1,

    angle: 0

  });
  var neckConstraint3 = Constraint.create({
    bodyA: body,
    pointA: {x: -1*bodyHeight/2, y:0},
    length: 60,
    bodyB: head,
    // angularStiffness: 1,
    stiffness: 0.1,

    angle: 0

  });
  let armPartLength = 100;
  let shoulderInset = 8;
  var rightUpperArm = Bodies.rectangle(500,400, 20, armPartLength, { collisionFilter: { group: -1 }});
  let upperArmConstraint = Constraint.create({
    bodyA: body,
    bodyB: rightUpperArm,
    pointA: {x: -bodyHeight/2 + shoulderInset, y: -bodyWidth/2 + shoulderInset},
    pointB: {x: 0, y: -armPartLength/2},
    length: 0
  });
  var rightForearm = Bodies.rectangle(500,400, 20, armPartLength, { collisionFilter: { group: -1 }});
  let lowerArmConstraint = Constraint.create({
    bodyA: rightUpperArm,
    bodyB: rightForearm,
    pointA: {x: 0, y: armPartLength/2},
    pointB: {x: 0, y: -armPartLength/2},
    length: 0
  });
  var leftUpperArm = Bodies.rectangle(500,400, 20, armPartLength, { collisionFilter: { group: -1 }});
  let upperLeftArmConstraint = Constraint.create({
    bodyA: body,
    bodyB: leftUpperArm,
    pointA: {x: -bodyHeight/2 + shoulderInset, y: bodyWidth/2 - shoulderInset},
    pointB: {x: 0, y: -armPartLength/2},
    length: 0
  });
  var leftForearm = Bodies.rectangle(500,400, 20, armPartLength, { collisionFilter: { group: -1 }});
  let lowerLeftArmConstraint = Constraint.create({
    bodyA: leftUpperArm,
    bodyB: leftForearm,
    pointA: {x: 0, y: armPartLength/2},
    pointB: {x: 0, y: -armPartLength/2},
    length: 0
  });
  
  let legPartLength = 120;
  let legInset = 20;
  let thighWidth = 40;
  var rightUpperLeg = Bodies.rectangle(500,400, thighWidth, legPartLength, { collisionFilter: { group: -1 }});
  let upperLegConstraint = Constraint.create({
    bodyA: body,
    bodyB: rightUpperLeg,
    pointA: {x: bodyHeight/2, y: -bodyWidth/2 + legInset},
    pointB: {x: 0, y: -legPartLength/2 + legInset},
    length: 0
  });
  var rightShin = Bodies.rectangle(500,400, 20, legPartLength, { collisionFilter: { group: -1 }});
  let lowerLegConstraint = Constraint.create({
    bodyA: rightUpperLeg,
    bodyB: rightShin,
    pointA: {x: 0, y: legPartLength/2},
    pointB: {x: 0, y: -legPartLength/2},
    length: 0
  });
  var leftUpperLeg = Bodies.rectangle(500,400, thighWidth, legPartLength, { collisionFilter: { group: -1 }});
  let upperLeftLegConstraint = Constraint.create({
    bodyA: body,
    bodyB: leftUpperLeg,
    pointA: {x: bodyHeight/2, y: bodyWidth/2 - legInset},
    pointB: {x: 0, y: -legPartLength/2  + legInset},
    length: 0
  });
  var leftShin = Bodies.rectangle(500,400, 20, legPartLength, { collisionFilter: { group: -1 }});
  let lowerLeftLegConstraint = Constraint.create({
    bodyA: leftUpperLeg,
    bodyB: leftShin,
    pointA: {x: 0, y: legPartLength/2},
    pointB: {x: 0, y: -legPartLength/2},
    length: 0
  });
  Composite.add(world, [body, head,
    neckConstraint,neckConstraint2, neckConstraint3,
    rightForearm, rightUpperArm, upperArmConstraint, lowerArmConstraint,
    leftForearm, leftUpperArm, upperLeftArmConstraint, lowerLeftArmConstraint,
    rightShin, rightUpperLeg, upperLegConstraint, lowerLegConstraint,
    leftShin, leftUpperLeg, upperLeftLegConstraint, lowerLeftLegConstraint,

  ]);


  Composite.add(world, [
    // walls
    Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
    Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
    Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
    Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
  ]);

  // add mouse control
  var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        // allow bodies on mouse to rotate
        angularStiffness: 0,
        render: {
          visible: false
        }
      }
    });


  let dollPins = {};

  // an example of using mouse events on a mouse
  Events.on(mouseConstraint, 'mouseup', function(event) {
    var mousePosition = event.mouse.position;
    console.log('mouseup at ' + mousePosition.x + ' ' + mousePosition.y);

    let Bounds = Matter.Bounds;
    let Detector = Matter.Detector;
    let Vertices = Matter.Vertices;

    let movedDist = Math.hypot(mousePosition.x - event.mouse.mousedownPosition.x, mousePosition.y - event.mouse.mousedownPosition.y);
    console.log('moved dist', movedDist)
    if(movedDist == 0){
      // clicking also removes the doll pin
      for (let i = 0; i < world.bodies.length; i++) {
        body = world.bodies[i];
        if (Bounds.contains(body.bounds, mouse.position)
          && Detector.canCollide(body.collisionFilter, mouseConstraint.collisionFilter)) {
          for (let j = body.parts.length > 1 ? 1 : 0; j < body.parts.length; j++) {
            let part = body.parts[j];
            if (Vertices.contains(part.vertices, mouse.position)) {
              if(dollPins[part.id]) {
                Composite.remove(world, dollPins[part.id]);
                dollPins[part.id] = null;
              }
            }
          }
        }
      }
    }
  });

  // an example of using mouse events on a mouse
  Events.on(mouseConstraint, 'startdrag', function(event) {
    console.log('startdrag', event);
    if(dollPins[event.body.id]) {
      Composite.remove(world, dollPins[event.body.id]);
      dollPins[event.body.id] = null;
    }
  });

  // an example of using mouse events on a mouse
  Events.on(mouseConstraint, 'enddrag', function(event) {

    console.log('enddrag', event);
    let movedDist = Math.hypot(event.mouse.mousedownPosition.x - event.mouse.mouseupPosition.x, event.mouse.mousedownPosition.y - event.mouse.mouseupPosition.y);
    if(movedDist > 2) {
      let bodyOffset =  {
        x: event.mouse.position.x - event.body.position.x,
        y: event.mouse.position.y - event.body.position.y
      }

      let pointOnBody = {
        x: bodyOffset.x,
        y: bodyOffset.y
      }

      let constraint = Constraint.create({
        pointA: {x: event.mouse.position.x, y: event.mouse.position.y},
        bodyB: event.body,
        pointB: pointOnBody
      });

      dollPins[event.body.id] = constraint;
      Composite.add(world, constraint);
    }
  });


  Composite.add(world, mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;

  // fit the render viewport to the scene
  Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: 800, y: 600 }
  });

  // context for MatterTools.Demo
  return {
    engine: engine,
    runner: runner,
    render: render,
    canvas: render.canvas,
    stop: function() {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
    }
  };
};

Example.climbingWall.title = 'Climbing Wall';
Example.climbingWall.for = '>=0.14.2';

if (typeof module !== 'undefined') {
  module.exports = Example.climbingWall;
}