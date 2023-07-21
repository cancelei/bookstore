import React, { useState } from 'react';
import Book from './Book';

function BookList() {
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' },
  ]);

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} onDelete={deleteBook} />
      ))}
    </div>
  );
}

export default BookList;
