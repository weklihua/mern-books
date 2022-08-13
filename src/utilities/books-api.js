// books-api.js

import sendRequest from './send-request';

const BASE_URL = '/api/books';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}
export function getReviews(bookId, data) {
  return sendRequest(`${BASE_URL}/${bookId}/reviews`, 'POST', data);
}

export function getDeleteReview(bookId, reviewId) {
  return sendRequest(`${BASE_URL}/${bookId}/reviews`, 'PUT', {bookId, reviewId})
}
