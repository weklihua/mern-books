import { useState , useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import * as booksAPI from '../../utilities/books-api';

export default function NewOrderPage() {
  const [menuBooks, setMenuBooks] = useState([]);

  // Add this useEffect with a dependency array
  useEffect(function() {
    async function getBooks() {
      const books = await booksAPI.getAll();
      setMenuBooks(books);
    }
    getBooks();
  }, []);

  return (
    <Container>
    <h1>NewOrderPage</h1>
    <button type="button" class="btn btn-primary" onClick={setMenuBooks}>Trigger re-render</button>
    </Container>
  );
}
