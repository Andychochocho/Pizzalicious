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
$(function() {
  $("#buyButton").click(function(event){
    event.preventDefault();
    var size = $("select#sizes").val();
    var toppings = []
    var quantity = $("select#quantity").val();
    var newPizza = new Pizza (size,toppings,quantity);

    $("#pizzaInfo").empty();
    $("#pizzaPriceList").empty();
debugger;
    $.each($("input[name='checkButton']:checked"), function(){
     toppings.push($(this).val());
     });

    $("#pizzaInfo").append("<li> Your size: " + size + "</li>" + "<li> Your Topping: " + toppings + "</li>" + "<li> Your Quantity: " + quantity + "</li>");
    // debugger;
    $("#pizzaPriceList").append("<li>$" + newPizza.price() + ".00 </li>");

    $("#pizzaResult").show();
  });
});






// -use jquery to identify values in checkboxes selected (loop)
// -append results into Pizzainfo on bottom of jquery

// $("input[type='radio']:checked").forEach(function(){
// if (this.value === "Sausage") {
//   return "Sausage";
// } else if (this.value === "Ham") {
//   return "Ham";
// } else if (this.value === "Pepperoni") {
//   return "Pepperoni";
// } else if (this.value === "Mushrooms") {
//   return "Mushrooms";
// } else if (this.value === "Tofu") {
//   return "Tofu";
// } else if (this.value === "Pineapple") {
//   return "Pineapple";
// } else {
//   alert("Please select your toppings");
// }
// });
