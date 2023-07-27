import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function Book({
  book: {
    id, title, author, category,
  },
}) {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{title}</h2>
      <div>new</div>
      <h3>{author}</h3>
      <h4>
        Category:
        {category}
      </h4>
      <button type="button" onClick={() => dispatch(removeBook(id))}>Delete Book</button>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
