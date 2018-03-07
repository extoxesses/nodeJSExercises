// cars.js
var wheels = require("./wheels.js");
var Engine = require("./engine.js");
var Control = require("./control.js");
var Air = require("./air.js");

// Wheel example
wheels.init("winter");
wheels.info();
console.log(wheels.getType());

// Engine example
var e = new Engine("50cc");
console.log("Car displacement is " + e.getDisplacement());

// Inerithance example
var c = new Control();
c.forward();
c.right();
c.stop();

// Air example
var air = new Air();
// First I define the listener using 'on' method
air.on("started", function(data){
  console.log("Status " + data.status);
});
// Then I start the event
air.start();