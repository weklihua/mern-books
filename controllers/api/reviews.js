const Book = require('../../models/book');

module.exports = {
  create,
  delete: deleteReview,
};

async function create(req, res) {
  // Find the book to embed the review within
  const foundBook = await Book.findById(req.params.id)
    // Add the user-centric info to req.body (the new review)
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    // console.log(req.body)

    // Push the subdoc for the review
    foundBook.reviews.push(req.body);
    await foundBook.save()
    // Always save the top-level document (not subdocs)
    res.json(foundBook)
  };
  
  async function deleteReview(req, res) {
    console.log(req.body)
    const book = await Book.findById(req.body.bookId)
    console.log(book)
    await book.deleteReviewOfBook(req.body.reviewId); 
    res.json(book)
  }
  
  