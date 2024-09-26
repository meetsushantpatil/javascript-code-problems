describe("sumTo", function() {
    it("calculates sum to N", function() {
  
      assert.equal(sumTo(5) , 15);
      
    });

    it("calcultaes sum to 10", function() {
      
      assert.equal(sumTo(10), 55);
    });

    it("calcultaes sum to 1", function() {
      
      assert.equal(sumTo(1), 1);
    });
  
    it("calcultaes sum to 0", function() {
      
      assert.equal(sumTo(0), 0);
    });
  });