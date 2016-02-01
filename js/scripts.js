// BUSINESS LOGIC
function Pizza (size,toppings,quantity) {
  this.size = size;
  this.toppings = toppings;
  this.quantity = quantity;
}

Pizza.prototype.price = function() {
  if (this.size === "Small") {
    return 8 * this.quantity + this.toppings.length;
  } else if (this.size === "Medium") {
      return 10 * this.quantity + this.toppings.length;
  } else if (this.size === "Large") {
      return 12 * this.quantity + this.toppings.length;
  } else {
      return 14 * this.quantity + this.toppings.length;
  }
}

// USER INTERFACE
$(function() {
  $("#buyButton").click(function(event){
    event.preventDefault();
    var size = $("select#sizes").val();
    var toppings = []
    var quantity = $("select#quantity").val();
    var newPizza = new Pizza (size,toppings,quantity);

    $("#pizzaInfo").empty();
    $("#pizzaPriceList").empty();
    $.each($("input[name='checkButton']:checked"), function(){
     toppings.push($(this).val());
     });

    $("#pizzaInfo").append("<li> Your size: " + size + "</li>" + "<li> Your Toppings: " + toppings.join(", ") + "</li>" + "<li> Your Quantity: " + quantity + "</li>");

    $("#pizzaPriceList").append("<li>$" + newPizza.price() + ".00 </li>");

    $("#pizzaResult").show();
  });
});
