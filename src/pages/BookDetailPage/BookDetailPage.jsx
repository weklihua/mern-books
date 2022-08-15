import { useState } from "react";
import { getReviews, getDeleteReview } from "../../utilities/books-api";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import "./BookDetailPage.css";
import * as ordersAPI from "../../utilities/orders-api";

export default function BookDetailPage({ data, setData, user }) {
  const [cart, setCart] = useState(null);
  const [genre, setGenre] = useState(data ? data.genre.name : null);
  const [reviews, setReviews] = useState({
    rating: 5,
    content: "",
  });
  const [error, setError] = useState("");

  async function handleAddToOrderCopy(bookId) {
    // 1. Call the addbookToCart function in ordersAPI, passing to it the bookId, and assign the resolved promise to a variable named cart.
    const updatedCart = await ordersAPI.addBookToCart(bookId);
    // 2. Update the cart state with the updated cart received from the server
    setCart(updatedCart);
  }

  function handleChange(evt) {
    setReviews({ ...reviews, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    const updatedBook = await getReviews(data._id, reviews);
    console.log(updatedBook);
    setReviews({
      rating: 5,
      content: "",
    });
    setData(updatedBook);
  }
  async function handleDelete(bookId, reviewId, userId) {
    const deleteReview = await getDeleteReview(bookId, reviewId, userId);
    console.log(deleteReview);
    setReviews({
      rating: 5,
      content: "",
    });
    setData(deleteReview);
  }

  return (
    <>
      {data ? (
        <Container className="BookDetailPage">
          <h1>{data.name}</h1>
          <div
            class="btn-group"
            role="group"
            aria-label="Basic example"
            style={{ float: "right" }}
          >
            <button
              type="button"
              className="btn btn-primary "
              onClick={() => handleAddToOrderCopy(data._id)}
            >
              {cart ? (
                <>
                  <span>&nbsp;&nbsp;Added to Cart&nbsp;&nbsp;</span>
                  <span className="badge bg-primary rounded-pill">
                    {cart.totalQty}
                  </span>
                </>
              ) : (
                <span>&nbsp;&nbsp;Add to Cart&nbsp;&nbsp;</span>
              )}
            </button>
          </div>

          <div className="form-container">
            <div className="card border-secondary mb-3">
              <div className="card-body">
                <p className="card-text">
                  <strong>Author</strong>: {data.author}{" "}
                  <img src={data.image} />
                </p>
                <p className="card-text">
                  <strong>Genre </strong>: {genre}
                </p>
                <p className="card-text">
                  <strong>Price </strong>: $ {data.price}
                </p>
                <p className="card-text">
                  <strong>Description </strong>: {data.description}
                </p>
              </div>
            </div>
          </div>

          <div className="form-container" style={{ "padding-top": 0 }}>
            <h3>Reviews</h3>

            {data.reviews.length ? (
              data.reviews.map((review) => {
                return (
                  <>
                    <div
                      className="toast show"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                    >
                      <div className="toast-header">
                        <strong className="me-auto">
                          User: {review.userName}{" "}
                        </strong>
                        <span id="rating">Rating: {review.rating}</span>
                        <small>
                          {new Date(review.updatedAt).toLocaleDateString()}
                        </small>
                      </div>
                      <div className="toast-body">
                        {review.content}
                        {user._id === review.user ? (
                          <button
                            type="submit"
                            onClick={() => {
                              handleDelete(data._id, review._id);
                            }}
                            className="btn btn-outline-secondary btn-sm"
                          >
                            DELETE
                          </button>
                        ) : null}
                        <hr />
                      </div>
                    </div>
                    <hr />
                  </>
                );
              })
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
          <div>
            <div className="form-container" style={{ "padding-top": 0 }}>
              <form autoComplete="off" onSubmit={handleSubmit}>
                <h3>Add a Review</h3>
                <div className="form-group">
                  <label for="exampleSelect1" className="form-label mt-4">
                    Rating
                  </label>
                  <select
                    className="form-select"
                    id="exampleSelect1"
                    type="number"
                    name="rating"
                    value={reviews.rating}
                    onChange={handleChange}
                    required
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5" selected="selected">
                      5
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="exampleTextarea" className="form-label mt-4">
                    Content
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleTextarea"
                    rows="3"
                    type="text"
                    name="content"
                    value={reviews.content}
                    onChange={handleChange}
                    required
                  >
                    {" "}
                  </textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Add Review
                  </button>
                </div>
              </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
          </div>
        </Container>
      ) : (
        <Link to="/orders/new" style={{ "text-align": "center" }}>
          <p>Back to New Order Page.</p>
        </Link>
      )}
    </>
  );
}
