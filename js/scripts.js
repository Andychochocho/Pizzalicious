// BUSINESS LOGIC
function Pizza (size,toppings,quantity) {
  this.size = size;
  this.toppings = toppings;
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
// $(function() {
//   $("#buyButton").click(function(event){
//     event.preventDefault();
//       // debugger;
//     var size = $("select#sizes").val();
//     var toppings = $("#sausage:checked").val();
//
//
//     var quantity = $("select#quantity").val();
//     var newPizza = new Pizza (size, toppings,quantity);
//
//     $("#pizzaInfo").empty();
//     $("#pizzaPriceList").empty();
//
//     $("#pizzaInfo").append("<li> Your size: " + size + "</li>" + "<li> Your toppings: " + toppings + "</li>" + "<li> Your quantity: " + quantity + "</li>");
//     $("#pizzaPriceList").append("<li>$" + newPizza.price() + ".00 </li>");
//
//     $("#pizzaResult").show();
//   });
// });
