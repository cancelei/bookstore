import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, onDelete }) {
  return (
    <div>
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <button type="button" onClick={() => onDelete(book.id)}>Delete Book</button>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
