import "./ShoppingListBook.css";
import { Link, useNavigate } from "react-router-dom";
import BookDetailPage from "../../pages/BookDetailPage/BookDetailPage";
// import { Routes, Route, useNavigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

export default function ShoppingListBook({ shoppingBook, handleAddToOrder, childToParent }) {
  // let navigate = useNavigate()
  return (
    <div className="card border-primary mb-3">
      <div className="card-header">Author: {shoppingBook.author}</div>
      <div className="card-body">
        <h4 className="card-title">{shoppingBook.name}</h4>
        <div className="card-text">
          <span>Price: ${shoppingBook.price.toFixed(2)}</span>
          <div>
            {/* <Router>
              <Route
                path="/books/:id"
                element={<BookDetailPage shoppingBook={shoppingBook} />}
              />
            </Router> */}
            <Link onClick={() => childToParent(shoppingBook)}
              to={`/books/${shoppingBook._id}`}
              element={<BookDetailPage shoppingBook={shoppingBook} />}
            >
            <button onClick={() => childToParent(shoppingBook)} >click child</button>
            </Link>
            {/* <BookDetailPage shoppingBook={shoppingBook} onClick={() => navigate(`/books/${shoppingBook._id}`)} /> */}
          </div>
          <hr />
          <button
            type="button"
            className="btn btn-primary"
            style={{ float: "right" }}
            onClick={() => handleAddToOrder(shoppingBook._id)}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
