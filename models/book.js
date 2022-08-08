// models/book.js

const mongoose = require('mongoose');
// Ensure the Genre model is processed by Mongoose (for populating Menu book queries)
require('./genre');
const bookSchema = require('./bookSchema');

module.exports = mongoose.model('book', bookSchema);
