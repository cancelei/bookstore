import React, { useState } from 'react';

function Book() {
  const [book, setBook] = useState({
    title: 'Default Title',
    author: 'Default Author',
  });

  const deleteBook = () => {
    setBook(null);
  };

  return (
    <div>
      {book ? (
        <>
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
        </>
      ) : (
        <p>No book to display</p>
      )}
      <button onClick={deleteBook}>Delete Book</button>
    </div>
  );
}

export default Book;
