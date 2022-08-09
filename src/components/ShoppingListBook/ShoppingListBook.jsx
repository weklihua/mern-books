import './ShoppingListBook.css';

export default function ShoppingListBook({ shoppingBook, handleAddToOrder }) {

  return (
    <div className="ShoppingListBook">
      <div className="name flex-ctr-ctr">{shoppingBook.name}</div>
      <div className="author">{shoppingBook.author}</div>
      <div className="buy">
        <span>${shoppingBook.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(shoppingBook._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}