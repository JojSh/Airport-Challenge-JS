function Airport(){
  this.capacity = 10
  this.hangar = []
}

Airport.prototype.instructLanding = function(plane) {
  if (this.hangar.length >= this.capacity){
    throw new Error("Airport is full");
  } else if (this.isStormy === true) {
    throw new Error("Weather is stormy");
  } else {
    plane.land();
    this.hangar.push(plane);
  }
}

Airport.prototype.isStormy = function(plane) {
  return false
}

Airport.prototype.safeToTakeOff = function() {
  if (this.isStormy()) {
    throw new Error("Weather is stormy");
  }
}

Airport.prototype.instructTakeOff = function(plane){
  plane.takeOff();
  this.hangar.splice(-1);
}
