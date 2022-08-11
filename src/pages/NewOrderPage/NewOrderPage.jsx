import { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import * as booksAPI from "../../utilities/books-api";
import "./NewOrderPage.css";
import { useNavigate } from "react-router-dom";
import ShoppingList from "../../components/ShoppingList/ShoppingList";
import GenreList from "../../components/GenreList/GenreList";
import OrderDetail from "../../components/OrderDetail/OrderDetail";
import * as ordersAPI from "../../utilities/orders-api";

export default function NewOrderPage({ user, setUser, childToParent }) {
  const [shoppingBooks, setShoppingBooks] = useState([]);
  const genresRef = useRef([]);
  const [activeGen, setActiveGen] = useState("");
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  // Add this useEffect with a dependency array
  useEffect(function () {
    async function getBooks() {
      const books = await booksAPI.getAll();
      genresRef.current = [...new Set(books.map((book) => book.genre.name))];

      setShoppingBooks(books);
      setActiveGen(genresRef.current[0]);
    }
    getBooks();
    // Load cart (a cart is the unpaid order for the logged in user)
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  /*--- Event Handlers --- */
  async function handleAddToOrder(bookId) {
    // 1. Call the addbookToCart function in ordersAPI, passing to it the bookId, and assign the resolved promise to a variable named cart.
    const updatedCart = await ordersAPI.addBookToCart(bookId);
    // 2. Update the cart state with the updated cart received from the server
    setCart(updatedCart);
    // console.log('hello')
    // alert(`add book: ${bookId}`);
  }

  async function handleChangeQty(bookId, newQty) {
    const updatedCart = await ordersAPI.setBookQtyInCart(bookId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate("/orders");
  }

  return (
    <Container className="NewOrderPage">
      <GenreList
        genres={genresRef.current}
        activeGen={activeGen}
        setActiveGen={setActiveGen}
      />
      <ShoppingList
      childToParent={childToParent}
        shoppingBooks={shoppingBooks.filter(
          (book) => book.genre.name === activeGen
        )}
        handleAddToOrder={handleAddToOrder}
      />
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
    </Container>
  );
}
