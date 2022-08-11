const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Require the bookSchema below
const bookSchema = require('./bookSchema');

const cartBookSchema = new Schema({
  // Set qty to 1 when new book pushed into cartBooks
  qty: { 
    type: Number, 
    default: 1 
  },
  book: bookSchema
}, {
  timestamps: true,
    // Include virtuals when doc is serialized to JSON
  toJSON: { virtuals: true }
});

// Add an extPrice to the cart book
cartBookSchema.virtual('extPrice').get(function () {
  // 'this' is bound to the cartBook subdocument
  return this.qty * this.book.price;
});

const orderSchema = new Schema({
  // An order belongs to a user
  user: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  // Embed an order's cart books is logical
  cartBooks: [cartBookSchema],
  // A user's unpaid order is their "cart"
  isPaid: { 
    type: Boolean, 
    default: false 
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true }

});

orderSchema.virtual('orderTotal').get(function(){
  return this.cartBooks.reduce((total, book) => total + book.extPrice, 0); 
})

orderSchema.virtual('totalQty').get(function(){
  return this.cartBooks.reduce((total, book) => total + book.qty, 0); 
})

orderSchema.virtual('orderId').get(function () {
  return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = function(userId){
  return this.findOneAndUpdate(
    // query
    {user: userId, isPaid: false},
    //update - in the case the order is upserted
    {user:userId},
    // upsert option creates the doc of it doesn't exist
    {upsert: true, new: true}

  )

}

// orderSchema.statics.getOrders = function(){
//   return this.find(
//     {user: userId, isPaid: true},
//     {user: userId},
//     {upsert: true, new: true}
//   )
// }

// Instance method for adding an book to a cart (unpaid order)
orderSchema.methods.addBookToCart = async function (bookId) {
  // this keyword is bound to the cart (order doc)
  const cart = this;
  // Check if the book already exists in the cart
  const cartBook = cart.cartBooks.find(cartBook => cartBook.book._id.equals(bookId));
  if (cartBook) {
    // It already exists, so increase the qty
    cartBook.qty += 1;
  } else {
    // Get the book from the "catalog"
    // Note how the mongoose.model method behaves as a getter when passed one arg vs. two
    const book = await mongoose.model('Book').findById(bookId);
    // The qty of the new cartBook object being pushed in defaults to 1
    cart.cartBooks.push({ book });
  }
  // return the save() method's promise
  return cart.save();
};

// Instance method to set an book's qty in the cart (will add book if does not exist)
orderSchema.methods.setBookQty = function(bookId, newQty) {
  // this keyword is bound to the cart (order doc)
  const cart = this;
  // Find the cart book in the cart for the menu book
  const cartBook = cart.cartBooks.find(cartBook => cartBook.book._id.equals(bookId));
  if (cartBook && newQty <= 0) {
    // Calling remove, removes itself from the cart.cartBooks array
    cartBook.remove();
  } else if (cartBook) {
    // Set the new qty - positive value is assured thanks to prev if
    cartBook.qty = newQty;
  }
  // return the save() method's promise
  return cart.save();
};

module.exports = mongoose.model('Order', orderSchema)