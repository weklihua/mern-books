require('dotenv').config();
require('./config/database');

const Genre = require('./models/genre');
const Book = require('./models/book');


(async function() {

  await Genre.deleteMany({});
  const genres = await Genre.create([
    {name: 'Fantasy', sortOrder: 10},
    {name: 'Science Fiction', sortOrder: 20},
    {name: 'Dystopian', sortOrder: 30},
    {name: 'Action & Adventure', sortOrder: 40},
    {name: 'Mystery', sortOrder: 50},
    {name: 'Horror', sortOrder: 60},
    {name: 'Thriller & Suspense', sortOrder: 70},
    {name: 'Romance', sortOrder: 80},
  ]);

  await Book.deleteMany({});
  const books = await Book.create([
    {name: 'It Ends with Us', author: 'Colleen Hoover', genre: genres[4], price: 9.99, description:'...'},
    {name: 'Verity', author: 'Colleen Hoover', genre: genres[4], price: 11.99, description:'...'},
    {name: 'Things We Never Got Over', author: 'Lucy Score', genre: genres[7], price: 13.89, description:'...'},
    {name: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', genre: genres[7], price: 9.42, description:'Be the first to review.'},


  ]);

  console.log(books)

  process.exit();

})();
