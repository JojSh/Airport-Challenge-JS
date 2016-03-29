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
    expect(luton.capacity).toEqual(50);
  })

  it("can override capacity", function(){
    expect(luton.capacity = 100).toEqual(100);
  })

  it("instructs the plane to land", function() {
    luton.instructLanding(plane)
    expect(plane.land()).toHaveBeenCalled;
    expect(luton.hangar).toContain(plane)
  })
})
