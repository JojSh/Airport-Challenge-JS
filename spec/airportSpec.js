describe("Airport", function() {
  var luton;
  var plane;

  beforeEach(function(){
    luton = new Airport();
    plane = jasmine.createSpyObj('plane', ['land']);
    plane.land.and.callFake(function(){
    });
  });

  it("has a default capacity", function(){
    expect(luton.capacity).toEqual(10);
  })

  it("can override capacity", function(){
    expect(luton.capacity = 15).toEqual(15);
  })

  it("instructs the plane to land", function() {
    luton.instructLanding(plane)
    expect(plane.land()).toHaveBeenCalled;
    expect(luton.hangar.length).toEqual(1)
    expect(luton.hangar).toContain(plane)
  })


  it("prevents plane landing if airport is full", function(){
    var times = luton.capacity;
    for(var i=0; i < times; i++){
    luton.instructLanding(plane);
  }
    expect(function(){
      luton.instructLanding(plane);
    }).toThrowError("Airport is full")
  })

  it("instructs a plane to take off", function(){

  })

  it("prevents landing when weather is stormy", function(){

  })

  it("prevents take off when weather is storym", function(){
    
  })

})
