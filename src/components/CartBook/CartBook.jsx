import './CartBook.css';

export default function CartBook({ cartBook, isPaid, handleChangeQty }) {
  return (
    <tr class="table-light">
      <td className="flex-ctr-ctr">{cartBook.book.name}</td>
      <td className="flex-ctr-ctr flex-col">
        {/* <span className="align-ctr">{cartBook.book.author}</span> */}
        <span>${cartBook.book.price.toFixed(2)}</span>
      </td>
      <td className="qty" style={{ justifyContent: isPaid && 'center' }}>
        {!isPaid &&
          <button type="button" className="btn btn-primary btn-sm"
            
            onClick={() => handleChangeQty(cartBook.book._id, cartBook.qty - 1)}
          >−</button>
        }
        <span id="qty">&nbsp;&nbsp;{cartBook.qty}&nbsp;&nbsp;</span>
        {!isPaid &&
          <button type="button" className="btn btn-primary btn-sm"
            
            onClick={() => handleChangeQty(cartBook.book._id, cartBook.qty + 1)}
          >+</button>
        }
      </td>
      <td className="ext-price">${cartBook.extPrice.toFixed(2)}</td>
    </tr>
  );
}