describe("Pizza",function(){
  it("will create a pizza with three seperate properities which user will build",function() {
    var newPizza = new Pizza ("Small", ["Pepperoni", "Sausage", "Mushrooms"], 3);
    expect(newPizza.sizes).to.equal("Small");
    expect(newPizza.toppings).to.eql(["Pepperoni", "Sausage", "Mushrooms"]);
    expect(newPizza.quantity).to.equal(2);
  });
});
