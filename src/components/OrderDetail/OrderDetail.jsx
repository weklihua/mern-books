import "./OrderDetail.css";
import CartBook from "../CartBook/CartBook";
import Container from "react-bootstrap/Container";


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
    <Container className="OrderDetail">
      <div className="card border-info mb-3">
      <div class="card-body">
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
      </div>
      <div className="line-book-container flex-ctr-ctr flex-col scroll-y">
        {cartBooks.length ? (
          <>
            <table class="table table-hover">
              <tbody>
                {cartBooks}
              </tbody>
            </table>
            <section className="total">
              {order.isPaid ? (
                <span className="right">TOTAL: ${order.orderTotal.toFixed(2)}</span>
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
          <div class="alert alert-dismissible alert-secondary">
           
            <strong>Add new books</strong>
          </div>
        )}
      </div>
    </Container>
  );
}
