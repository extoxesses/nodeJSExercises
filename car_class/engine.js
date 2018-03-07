// engine.js
var displacement_;

var Class = function(displacement) {
  displacement_ = displacement
}

Class.prototype = {
  forward: function() {
    console.log("The car is moving forward.");
  },// forward function

  backward: function() {
    console.log("The car is moving backward.");
  }, //backward function

  getDisplacement: function(){
    return displacement_;
  }//getDisplacement
}//prototyep

module.exports = Class;