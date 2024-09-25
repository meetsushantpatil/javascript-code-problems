describe("sumSalaries", function() {
    it("calculates salary", function() {
      let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
      };
  
      assert.equal(sumSalaries(salaries) , 650);
      
    });
  
    it("calcultaes empty array", function() {
      let salaries = {};
      
      assert.equal(sumSalaries(salaries), 0);
    });
  });