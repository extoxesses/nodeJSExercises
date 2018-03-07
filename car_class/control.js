// control.js

var util = require("util");
var Engine = require("./engine.js");

var Class = function() { }
util.inherits(Class, Engine);

Class.prototype.left = function() {
  console.log("The car is moving to left.");
}// left

Class.prototype.right = function() {
  console.log("The car is moving to right.");
}// rigth

Class.prototype.stop = function() {
  console.log("The car is stopped.");
}// rigth

module.exports = Class;
