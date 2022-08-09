const Schema = require('mongoose').Schema;

const reviewSchema = new Schema({
  content: {type: String, required: true},
  rating: {type: Number, min: 1, max: 5, default: 5},
  // user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  // userName: String,
}, {
  timestamps: true
});

const bookSchema = new Schema({
  name: { type: String, required: true },
  
  author: {type: String},
  genre: {type: Schema.Types.ObjectId, ref: 'Genre'},
  price: { type: Number, required: true, default: 0 },
  description: {type: String},
  reviews: [reviewSchema]
}, {
  timestamps: true
});

module.exports = bookSchema;
