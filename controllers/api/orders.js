const Order = require('../../models/order');
// const Book = require('../../models/book');

module.exports = {
  cart,
  addToCart,
  setBookQtyInCart,
  checkout,
};

// A cart is the unpaid order for a user
async function cart(req, res) {
  // A cart is the unpaid order for a user
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}

// Add an book to the cart
async function addToCart(req, res) {

}

// Updates an book's qty in the cart
async function setBookQtyInCart(req, res) {
}

// Update the cart's isPaid property to true
async function checkout(req, res) {

}