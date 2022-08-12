import { useState } from "react";
import { getReviews } from "../../utilities/books-api";
import Container from "react-bootstrap/Container";
import "./BookDetailPage.css";

export default function BookDetailPage({ data, setData }) {
  const [reviews, setReviews] = useState({
    rating: 5,
    content: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setReviews({ ...reviews, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    // console.log(reviews)
    // console.log(data)
    // console.log('Submit reviews!')
    const updatedBook = await getReviews(data._id, reviews);
    // console.log(review);
    setReviews({
      rating: 5,
      content: "",
    });
    setData(updatedBook);
  }

  return (
    <Container className="BookDetailPage">
      <h1>{data.name}</h1>
      <div className="form-container">
        <div className="card border-secondary mb-3">
          <div className="card-body">
            <p className="card-text">Author: {data.author}</p>
            <p className="card-text">Genre: {data.genre.name}</p>
            <p className="card-text">Price: $ {data.price}</p>
            <p className="card-text">Description: {data.description}</p>
          </div>
        </div>
      </div>
      {/* 
      <br />
      <br /> */}

      <div className="form-container" style={{ "padding-top": 0 }}>
        <legend>Reviews</legend>

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
                    <span>Rating: {review.rating}</span>
                    <small>
                      {new Date(review.updatedAt).toLocaleDateString()}
                    </small>
                  </div>
                  <div className="toast-body">{review.content}</div>
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
            <legend>Add Reviews</legend>
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
  );
}
