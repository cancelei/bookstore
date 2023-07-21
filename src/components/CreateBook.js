import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CreateBook({ onCreate }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onCreate(title, author);

    // Reset form fields
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title:
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="author">
        Author:
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Create Book</button>
    </form>
  );
}

CreateBook.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default CreateBook;
