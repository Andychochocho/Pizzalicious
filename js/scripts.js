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
      return this.size * this.quantity;
  }
}
