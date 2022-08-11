import "./OrderDetail.css";
import CartBook from "../CartBook/CartBook";

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({
  order,
  handleChangeQty,
  handleCheckout,
}) {
  if (!order) return null;

  const cartBooks = order.cartBooks.map((book) => (
    <CartBook
      cartBook={book}
      isPaid={order.isPaid}
      key={book._id}
      handleChangeQty={handleChangeQty}
    />
  ));

  return (
    <div className="OrderDetail">
      <div className="section-heading">
        {order.isPaid ? (
          <span>
            ORDER <span className="smaller">{order.orderId}</span>
          </span>
        ) : (
          <span>NEW ORDER</span>
        )}
        <span style={{ float: "right" }}>
          {new Date(order.updatedAt).toLocaleDateString()}
        </span>
      </div>
      <div className="line-book-container flex-ctr-ctr flex-col scroll-y">
        {cartBooks.length ? (
          <>
            <table class="table table-hover">
              <tbody>
                {/* <tr class="table-active"> */}
                {cartBooks}

                {/* </tr> */}
              </tbody>
            </table>
            <section className="total">
              {order.isPaid ? (
                <span className="right">TOTAL&nbsp;&nbsp;</span>
              ) : (
                <>
                  <div>Total Qty: {order.totalQty}</div>
                  <div className="right">
                    Total Price: ${order.orderTotal.toFixed(2)}
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleCheckout}
                    disabled={!cartBooks.length}
                  >
                    CHECKOUT
                  </button>
                </>
              )}
            </section>
          </>
        ) : (
          // <div className="hungry">Hungry?</div>
          <div class="alert alert-dismissible alert-secondary">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
            ></button>
            <strong>Add new books</strong>
          </div>
        )}
      </div>
    </div>
  );
}
