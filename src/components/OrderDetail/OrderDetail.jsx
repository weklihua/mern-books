import './OrderDetail.css';
import CartBook from '../CartBook/CartBook';

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
  if (!order) return null;

  const cartBooks = order.cartBooks.map(book =>
    <CartBook
      cartBook={book}
      isPaid={order.isPaid}
      key={book._id}
      handleChangeQty={handleChangeQty}
    />
  );

  return (
    <div className="OrderDetail">
      <div className="section-heading">
        {order.isPaid ?
          <span>ORDER <span className="smaller">{order.orderId}</span></span>
          :
          <span>NEW ORDER</span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-book-container flex-ctr-ctr flex-col scroll-y">
        {cartBooks.length ?
          <>
            {cartBooks}
            <section className="total">
              {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                type="button" className="btn btn-primary"
                 
                  onClick={handleCheckout}
                  disabled={!cartBooks.length}
                >CHECKOUT</button>
              }
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="hungry">Hungry?</div>
        }
      </div>
    </div>
  );
}