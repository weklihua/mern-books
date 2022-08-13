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
    {name: 'The Shadow of the Gods', author: 'John Gwynne', genre: genres[0],image:'https://i.imgur.com/X3jYSFV.jpg', price: 9.99, description:'A century has passed since the gods fought and drove themselves to extinction. Now only their bones remain, promising great power to those brave enough to seek them out. As whispers of war echo across the land of Vigrid, fate follows in the footsteps of three warriors: a huntress on a dangerous quest, a noblewoman pursuing battle fame, and a thrall seeking vengeance among the mercenaries known as the Bloodsworn.'},
    {name: 'Red Queen', author: 'Victoria Aveyard', genre: genres[0],image:'https://i.imgur.com/4LpAP1d.jpg', price: 12.99, description:"Mare Barrow's world is divided by blood—those with common, Red blood serve the Silver-blooded elite, who are gifted with superhuman abilities. Mare is a Red, scraping by as a thief in a poor, rural village, until a twist of fate throws her in front of the Silver court. Before the king, princes, and all the nobles, she discovers she has an ability of her own."},
    {name: "A Good Girl's Guide to Murder", author: 'Holly Jackson', genre: genres[6],image:'https://i.imgur.com/83ii64T.jpg', price: 8.99, description:"Pretty and popular high school senior Andie Bell was murdered by her boyfriend, Sal Singh, who then killed himself. It was all anyone could talk about. And five years later, Pip sees how the tragedy still haunts her town."},
    {name: "Prodigy", author: 'Marie Lu', genre: genres[2],image:'https://i.imgur.com/OSaHdY5.jpg', price: 9.99, description:"June and Day arrive in Vegas just as the unthinkable happens: the Elector Primo dies, and his son Anden takes his place. With the Republic edging closer to chaos, the two join a group of Patriot rebels eager to help Day rescue his brother and offer passage to the Colonies. They have only one request—June and Day must assassinate the new Elector."},
    {name: "The Atlantis Gene", author: 'A.G. Riddle', genre: genres[6],image:'https://i.imgur.com/EkbJ2Tr.jpg', price: 9.99, description:"In Antarctica, researchers discover a mysterious structure, buried in ice. In a lab in Jakarta, an autism researcher identifies a revolutionary treatment that could change everything. But these two incredible discoveries aren’t what they seem. They will set off a race to unravel the deepest secrets of human existence—and an event that could change humanity forever."},
    {name: "The Testing", author: 'Joelle Charbonneau', genre: genres[3],image:'https://i.imgur.com/Vn5Gflc.jpg', price: 9.99, description:"It’s graduation day for sixteen-year-old Malencia Vale, and the entire Five Lakes Colony (the former Great Lakes) is celebrating. All Cia can think about—hope for—is whether she’ll be chosen for The Testing, a United Commonwealth program that selects the best and brightest new graduates to become possible leaders of the slowly revitalizing post-war civilization."},
    {name: "Project Hail Mary", author: 'Andy Weir', genre: genres[1],image:'https://i.imgur.com/uGgCD9A.jpg', price: 9.99, description:"Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish. Except that right now, he doesn’t know that. He can’t even remember his own name, let alone the nature of his assignment or how to complete it. All he knows is that he’s been asleep for a very, very long time. And he’s just been awakened to find himself millions of miles from home, with nothing but two corpses for company. His crewmates dead, his memories fuzzily returning, Ryland realizes that an impossible task now confronts him. Hurtling through space on this tiny ship, it’s up to him to puzzle out an impossible scientific mystery—and conquer an extinction-level threat to our species.  "},


  ]);

  console.log(books)

  process.exit();

})();
