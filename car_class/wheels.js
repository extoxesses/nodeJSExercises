// wheels.js
var typeOfTires;

exports.init = function(type) {
  typeOfTires = type;
}//init

exports.info = function() {
  console.log("The car uses " + typeOfTires + " tires.");
}//info

exports.getType = function(){
  return typeOfTires;
}//getType