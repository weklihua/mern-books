import OrderListBook from '../OrderListBook/OrderListBook';
import './OrderList.css';

export default function OrderList({ orders, activeOrder, handleSelectOrder }) {
  const orderBooks = orders.map(order =>
    <OrderListBook
      order={order}
      isSelected={order === activeOrder} 
      handleSelectOrder={handleSelectOrder}
      key={order._id}
    />
  );

  return (
    <main className="OrderList">
      {orderBooks.length ?
        orderBooks
        :
        <span className="no-orders">No Previous Orders</span>
      }
    </main>
  );
}