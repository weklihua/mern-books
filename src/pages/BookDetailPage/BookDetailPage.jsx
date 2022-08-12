import { useState } from "react";
import { getReviews } from "../../utilities/books-api";
import Container from "react-bootstrap/Container";
import "./BookDetailPage.css"

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
    const review = await getReviews(data._id, reviews);
    console.log(review);
    setReviews({
      rating: 5,
      content: "",
    });
    setData(review);
  }

  return (
    <Container className="BookDetailPage">
      <h1>BookDetailPage</h1>
      <div>{data.name}</div>
      <div>{data.author}</div>
      <br />
      <br />
      <h2>Reviews</h2>
      {data.reviews.map((review) => {
        return (
          <>
            <div>{review.rating}</div>
            <div>{review.content}</div>
          </>
        );
      })}
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
          <legend>Add Reviews</legend>
            <div class="form-group">
              <label for="exampleSelect1" class="form-label mt-4">
                Rating
              </label>
              <select
                class="form-select"
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
            <div class="form-group">
              <label for="exampleTextarea" class="form-label mt-4">
                Content
              </label>
              <textarea
                class="form-control"
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
            <div class="form-group">
              <button type="submit" class="btn btn-primary">Add Review</button>
              </div>
          </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
      </div>
    </Container>
  );
}
