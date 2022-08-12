const express = require('express');
const router = express.Router();
const booksCtrl = require('../../controllers/api/books');
const reviewsCtrl = require('../../controllers/api/reviews')


// GET /api/books
router.get('/', booksCtrl.index);
// GET /api/books/:id
router.get('/:id', booksCtrl.show);
//POST /movies/:id/reviews
router.post('/:id/reviews', reviewsCtrl.create)

module.exports = router;