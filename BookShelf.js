import React, { useState } from 'react';

const BookShelf = () => {
  const [books, setBooks] = useState([]);

  // Fetch user's books from localStorage or context
  // For simplicity, using useState here
  // In real app, use useEffect to fetch data on component mount

  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div>
      <h2>Bookshelf</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <span>{book.title} by {book.author}</span>
            <button onClick={() => removeBook(book.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookShelf;
