import "./ShoppingListBook.css";
import {Link} from "react-router-dom"
import OrderDetailPage from "../../pages/OrderDetailPage/OrderDetailPage"
import { Routes, Route, Navigate } from "react-router-dom";

export default function ShoppingListBook({ shoppingBook, handleAddToOrder }) {
  return (
    <div className="card border-primary mb-3" >
      <div className="card-header">Author: {shoppingBook.author}</div>
      <div className="card-body">
        <h4 className="card-title">{shoppingBook.name}</h4>
        <div className="card-text">
          <span>Price: ${shoppingBook.price.toFixed(2)}</span>
          <div>
            <Link to={`/books/${shoppingBook._id}`} element={<OrderDetailPage shoppingBook={shoppingBook}  />} >Details</Link>
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
