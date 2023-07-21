import React, { useState } from 'react';
import BookList from '../components/BookList';
import CreateBook from '../components/CreateBook';

function HomePage() {
  const [books, setBooks] = useState([
    { id: 1, title: 'The Hunger Games', author: 'Suzanne Collins' },
    { id: 2, title: 'Dune', author: 'Frank Herbert' },
    { id: 3, title: 'Capital in the Twenty-First Century', author: 'Suzanne Collins' },
    // initial books
  ]);

  const addBook = (title, author) => {
    // create a new book object
    const newBook = {
      id: books.length + 1, // generate a new id
      title,
      author,
    };

    // add the new book to the books array
    setBooks([...books, newBook]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <>
      <h1>Home Page</h1>
      <p>This is the home page with books!</p>
      <BookList books={books} onDelete={deleteBook} />
      <CreateBook onCreate={addBook} />
    </>
  );
}

export default HomePage;
