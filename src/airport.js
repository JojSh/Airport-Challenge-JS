function Airport(){
  this.capacity = 50
  this.hangar = []
}

Airport.prototype.instructLanding = function(plane) {
  plane.land();
  this.hangar.push(plane)
}
