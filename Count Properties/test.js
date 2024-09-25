describe("count", function() {
  it("counts propeties", function() {
    let user = {
      name: 'John',
      age: 30
    };

    assert.equal(count(user) , 2);
    
  });

  it("calcultaes propeties for empty obj", function() {
    
    assert.equal(count({}), 0);
  });
});