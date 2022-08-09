import './ShoppingList.css';
import ShoppingListBook from '../ShoppingListBook/ShoppingListBook';

export default function ShoppingList({ shoppingBooks, handleAddToOrder }) {
  const books = shoppingBooks.map(book =>
    <ShoppingListBook
      key={book._id}
      shoppingBook={book}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="ShoppingList">
      {books}
    </main>
  );
}