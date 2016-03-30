function Airport(){
  this.capacity = 10
  this.hangar = []
}

Airport.prototype.instructLanding = function(plane) {
  if (this.hangar.length >= this.capacity){
    throw new Error("Airport is full");
  } else {
    plane.land();
    this.hangar.push(plane);
  }
}

Airport.prototype.instructTakeOff = function(plane){
  plane.takeOff();
  this.hangar.splice(-1);
}
