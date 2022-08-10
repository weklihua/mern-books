// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Book = require('./models/book');
const Genre = require('./models/category');
const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, book, category, order;
let users, books, categories, orders;
