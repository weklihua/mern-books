import "./ShoppingListBook.css";

export default function ShoppingListBook({ shoppingBook, handleAddToOrder }) {
  return (
    <div className="card border-primary mb-3" >
      <div className="card-header">Author: {shoppingBook.author}</div>
      <div className="card-body">
        <h4 className="card-title">{shoppingBook.name}</h4>
        <div className="card-text">
          <span>Price: ${shoppingBook.price.toFixed(2)}</span>
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
    // <div className="ShoppingListBook">

    //   <div className="name flex-ctr-ctr">{shoppingBook.name}</div>
    //   <div className="author">{shoppingBook.author}</div>
    //   <div className="buy">
    //     <span>${shoppingBook.price.toFixed(2)}</span>
    //     <button type="button" class="btn btn-primary" className="btn-sm" onClick={() => handleAddToOrder(shoppingBook._id)}>
    //       ADD
    //     </button>
    //   </div>
    // </div>
  );
}
