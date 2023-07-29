import React from 'react';
import { useSelector } from 'react-redux';

import BookList from '../components/BookList';
import CreateBook from '../components/CreateBook';

function HomePage() {
  const books = useSelector((state) => state.books);

  return (
    <>
      <h1>Bookstore CMS</h1>
      <BookList books={books} />
      <CreateBook />
    </>
  );
}

export default HomePage;
