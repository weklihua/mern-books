const Order = require('../../models/order');
// const Book = require('../../models/book');

module.exports = {
  cart,
  addToCart,
  setBookQtyInCart,
  checkout,
  index,
};

// A cart is the unpaid order for a user
async function cart(req, res) {
  // A cart is the unpaid order for a user
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}

// Add an book to the cart
async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  // The promise resolves to the document, which we already have
  // in the cart variable, so no need to create another variable...
  await cart.addBookToCart(req.params.id); 
  res.json(cart);
}

// Updates an book's qty in the cart
async function setBookQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setBookQty(req.body.bookId, req.body.newQty); 
  res.json(cart);
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save(); 
  res.json(cart);
}

//show all the orders
async function index(req, res) {
  const orders = await Order.find(
    {user: req.user._id, isPaid: true}
  ).sort('-updatedAt').exec()
  res.json(orders)
}