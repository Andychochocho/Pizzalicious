// BUSINESS LOGIC
function Pizza (size,meatTopping,otherTopping,quantity) {
  this.size = size;
  this.meatTopping = meatTopping;
  this.otherTopping = otherTopping;
  this.quantity = quantity;
}

Pizza.prototype.price = function() {
  if (this.size === "Small") {
    return 8 * this.quantity;
  } else if (this.size === "Medium") {
      return 10 * this.quantity;
  } else if (this.size === "Large") {
      return 12 * this.quantity;
  } else {
      return 14 * this.quantity;
  }
}

// USER INTERFACE
$(function() {
  $("#buyButton").click(function(event){
    event.preventDefault();
    var size = $("select#sizes").val();
    var quantity = $("select#quantity").val();
    var meatToppings = $("select#meatTopping").val();
    var otherToppings = $("select#otherTopping").val();
    var newPizza = new Pizza (size,meatTopping,otherTopping,quantity);
    // var toppings = $("#sausage:checked").val();
    // $("#topping").each(function(){
    //   var inputtedTopping1 = $(this).("#sausage:checked").val();
    // });

    $("#pizzaInfo").empty();
    $("#pizzaPriceList").empty();

    $("#pizzaInfo").append("<li> Your size: " + size + "</li>" + "<li> Your Meat Topping: " + meatToppings + "</li>" + "<li> Your Other Topping: " + otherToppings + "</li>" +"<li> Your quantity: " + quantity + "</li>");
    // debugger;
    $("#pizzaPriceList").append("<li>$" + newPizza.price() + ".00 </li>");

    $("#pizzaResult").show();
  });
});
