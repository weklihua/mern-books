import "./OrderHistoryPage.css";
import { useState, useEffect } from "react";
import * as ordersAPI from "../../utilities/orders-api";
import OrderList from "../../components/OrderList/OrderList";
import OrderDetail from "../../components/OrderDetail/OrderDetail";
import { Container } from "react-bootstrap";

export default function OrderHistoryPage({ user, setUser }) {
  /*--- State --- */
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

  /*--- Side Effects --- */
  useEffect(function () {
    // Load previous orders (paid)
    async function fetchOrderHistory() {
      const orders = await ordersAPI.getOrderHistory();
      setOrders(orders);
      // If no orders, activeOrder will be set to null below
      setActiveOrder(orders[0] || null);
    }
    fetchOrderHistory();
  }, []);

  /*--- Event Handlers --- */
  function handleSelectOrder(order) {
    setActiveOrder(order);
  }

  /*--- Rendered UI --- */
  return (
    <Container className="OrderHistoryPage" >
      <ul class="nav nav-pills" id="nav-header">
        <li class="nav-item" >
          <h4>Previous Orders</h4>
        </li>
      </ul>
      <OrderList
        orders={orders}
        activeOrder={activeOrder}
        handleSelectOrder={handleSelectOrder}
      />
      <OrderDetail order={activeOrder} />
    </Container>
  );
}
