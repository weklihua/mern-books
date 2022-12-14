const express = require('express');
const router = express.Router();
const booksCtrl = require('../../controllers/api/books');
const reviewsCtrl = require('../../controllers/api/reviews')


// GET /api/books
router.get('/', booksCtrl.index);
// GET /api/books/:id
router.get('/:id', booksCtrl.show);
//POST /books/:id/reviews
router.post('/:id/reviews', reviewsCtrl.create);
//PUT /books/:id/reviews
router.put('/:id/reviews', reviewsCtrl.delete)


module.exports = router;