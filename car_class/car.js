// cars.js
var wheels = require("./wheels.js");
var Engine = require("./engine.js");
var Control = require("./control.js");

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
