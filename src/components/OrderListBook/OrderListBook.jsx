import './OrderListBook.css';

export default function OrderListBook({ order, isSelected, handleSelectOrder }) {
  return (
    <div >
      <div className={`card border-primary mb-3${isSelected ? ' selected' : ''}`} onClick={() => handleSelectOrder(order)}>
        <div className="card-header">{new Date(order.updatedAt).toLocaleDateString()}
        
        </div>
        <div className="card-body">

        <div className="card-title">Order Id: <span className="smaller">{order.orderId}</span><span>${order.orderTotal.toFixed(2)}</span></div>
      <div className="card-text">
        <div>${order.orderTotal.toFixed(2)}</div>
        <div className="smaller">{order.totalQty} Item{order.totalQty > 1 ? 's' : ''}</div>
        </div>
        </div>
      </div>
    </div>
  );
}