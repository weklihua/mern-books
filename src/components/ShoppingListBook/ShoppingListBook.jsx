import "./ShoppingListBook.css";
import { Link, useNavigate } from "react-router-dom";


export default function ShoppingListBook({
  shoppingBook,
  handleAddToOrder,
  childToParent,
}) {
  return (
    <div className="card border-primary mb-3">
      <div className="card-header">Author: {shoppingBook.author}</div>
      <div className="card-body">
        <h4 className="card-title">{shoppingBook.name}</h4>
        <div className="card-text">
          <span>Price: ${shoppingBook.price.toFixed(2)}</span>
          <div></div>
          <hr />
          <Link
            onClick={() => childToParent(shoppingBook)}
            to={`/books/${shoppingBook._id}`}
          >
            <button
              type="button"
              class="btn btn-link"
              style={{ float: "left" }}
            >
              View details
            </button>
          </Link>
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
