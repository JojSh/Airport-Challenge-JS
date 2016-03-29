function Airport(){
  this.capacity = 50
}

Airport.prototype.instructLanding = function(plane) {
  plane.land();
}
