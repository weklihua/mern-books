import { useState , useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import * as booksAPI from '../../utilities/books-api';
import './NewOrderPage.css';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import ShoppingList from '../../components/ShoppingList/ShoppingList';
import GenreList from '../../components/GenreList/GenreList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import * as ordersAPI from '../../utilities/orders-api';


export default function NewOrderPage({user, setUser}) {
  const [shoppingBooks, setShoppingBooks] = useState([]);
  const genresRef = useRef([]);
  const [activeGen, setActiveGen] = useState('');
  const [cart, setCart] = useState(null)

  // Add this useEffect with a dependency array
  useEffect(function() {
    async function getBooks() {
      const books = await booksAPI.getAll();
      genresRef.current = [...new Set(books.map(book => book.genre.name))];

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

  return (
    <Container className="NewOrderPage">
      <aside>
      {/* <Logo /> */}
      <GenreList
        genres={genresRef.current}
        activeGen={activeGen}
        setActiveGen={setActiveGen}
      />
      <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
      <UserLogOut user={user} setUser={setUser} />
      </aside>
      <ShoppingList
        shoppingBooks={shoppingBooks.filter(book => book.genre.name === activeGen)}
        // handleAddToOrder={handleAddToOrder}
      />
      <OrderDetail />
      {/* <button type="button" class="btn btn-primary" onClick={setShoppingBooks}>Trigger re-render</button> */}
    </Container>
  );
}
