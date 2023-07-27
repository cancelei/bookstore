import React from 'react';
import { useSelector } from 'react-redux';

import Book from './Book';

function BookList() {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
