describe("Pizza", function(){
  it("will create a pizza with three seperate properities which user will build",function() {
    var newPizza = new Pizza ("Small", ["Pepperoni", "Sausage", "Mushrooms"], 3);
    expect(newPizza.size).to.equal("Small");
    expect(newPizza.toppings).to.eql(["Pepperoni", "Sausage", "Mushrooms"]);
    expect(newPizza.quantity).to.equal(3);
  });
});

describe("Pizza.Prototype.Price", function(){
  it("will calculate pizza's cost", function(){
    var newPizza = new Pizza ("Medium", ["Ham"], 2);
    expect(newPizza.price()).to.equal(21)
  });
});
