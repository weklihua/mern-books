import './CartBook.css';

export default function CartBook({ cartBook, isPaid, handleChangeQty }) {
  return (
    <div className="CartBook">
      <div className="flex-ctr-ctr">{cartBook.book.name}</div>
      <div className="flex-ctr-ctr flex-col">
        <span className="align-ctr">{cartBook.book.author}</span>
        <span>{cartBook.book.price.toFixed(2)}</span>
      </div>
      <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(cartBook.book._id, cartBook.qty - 1)}
          >−</button>
        }
        <span>{cartBook.qty}</span>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(cartBook.book._id, cartBook.qty + 1)}
          >+</button>
        }
      </div>
      <div className="ext-price">${cartBook.extPrice.toFixed(2)}</div>
    </div>
  );
}