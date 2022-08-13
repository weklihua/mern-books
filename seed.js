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
    {name: 'It Ends with Us', author: 'Colleen Hoover', genre: genres[4], price: 9.99, image: 'https://i.imgur.com/0nDRG8h.jpg', description:'In this “brave and heartbreaking novel that digs its claws into you and doesn’t let go, long after you’ve finished it” (Anna Todd, New York Times bestselling author) from the #1 New York Times bestselling author of All Your Perfects, a workaholic with a too-good-to-be-true romance can’t stop thinking about her first love.'},
    {name: 'Verity', author: 'Colleen Hoover', genre: genres[4], price: 11.99, image:'https://i.imgur.com/Oep1Dz6.jpg', description:'Whose truth is the lie? Stay up all night reading the sensational psychological thriller that has readers obsessed, from the #1 New York Times bestselling author of It Ends With Us.'},
    {name: 'Things We Never Got Over', author: 'Lucy Score', genre: genres[7], price: 13.89, image: 'https://i.imgur.com/fqOo97N.jpg', description:'Naomi wasn’t just running away from her wedding. She was riding to the rescue of her estranged twin to Knockemout, Virginia, a rough-around-the-edges town where disputes are settled the old-fashioned way…with fists and beer. Usually in that order.'},
    {name: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', genre: genres[7],image:'https://i.imgur.com/mE0HFuA.jpg', price: 9.42, description:'Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. But when she chooses unknown magazine reporter Monique Grant for the job, no one is more astounded than Monique herself. Why her? Why now?'},


  ]);

  console.log(books)

  process.exit();

})();
