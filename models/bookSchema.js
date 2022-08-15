const Schema = require('mongoose').Schema;

const reviewSchema = new Schema({
  content: {type: String},
  rating: {type: Number, min: 1, max: 5, default: 5},
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  userName: String,
}, {
  timestamps: true
});

const bookSchema = new Schema({
  name: { type: String, required: true },
  author: {type: String},
  genre: {type: Schema.Types.ObjectId, ref: 'Genre'},
  price: { type: Number, required: true, default: 0 },
  image:{type: String},
  description: {type: String},
  reviews: [reviewSchema]
}, {
  timestamps: true
});

bookSchema.statics.getBook = function(bookId){
  return this.findOneAndUpdate(
    // query
    {book: bookId},
    //update - in the case the book is upserted
    {book:bookId},
    // upsert option creates the doc of it doesn't exist
    // {upsert: true, new: true}
  )
}

bookSchema.methods.deleteReviewOfBook = function(reviewId) {
  const book = this
  const review = book.reviews.find(review => review._id.equals(reviewId))
  if (review) {
    review.remove()
  } 
  return book.save()
}
module.exports = bookSchema;
