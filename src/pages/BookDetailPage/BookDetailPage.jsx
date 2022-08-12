import { useState } from "react"
import { getReviews } from "../../utilities/books-api";

export default function BookDetailPage({ data }) {

  const [reviews, setReviews] = useState({
    rating: 5,
    content: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setReviews({ ...reviews, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    console.log('Submit reviews!')
    // try {
    //   // The promise returned by the signUp service method 
    //   // will resolve to the user object included in the
    //   // payload of the JSON Web Token (JWT)
    //   const review = await getReviews(data._id);
    //   setReviews(review);
    // } catch {
    //   setError('Try Again');
    // }
  }

  return (
    <>
    <h1>BookDetailPage</h1>
    <div>{data.name}</div>
    <div>{data.author}</div>
    <div>{data.reviews}</div>
    <br/><br/><h2>Reviews</h2>
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div>

          <label>Rating</label>
          <select type="number" name="rating" value={data.reviews.rating} onChange={handleChange} required >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5" selected="selected">5</option>
          </select>
          </div>
          <div>

          <label>Content</label>
          <input type="text" name="content" value={data.reviews.content} onChange={handleChange} required />
          </div>
          <button type="submit">Add Review</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
    </>
  )
}