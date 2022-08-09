const Book = require('../../models/book');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const books = await Book.find({}).sort('name').populate('genre').exec();
  // re-sort based upon the sortOrder of the categories
  books.sort((a, b) => a.genre.sortOrder - b.genre.sortOrder);
  res.json(books);
}

async function show(req, res) {
  const book = await Book.findById(req.params.id);
  res.json(book);
}