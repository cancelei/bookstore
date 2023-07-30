import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import Book from './Book';
import bookListStyles from '../styles/BookList.module.css';

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className={bookListStyles.booklist}>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
