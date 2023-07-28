import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

function CreateBook() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState(''); // New state variable for the category

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookId = uuid();
    dispatch(addBook({
      item_id: bookId,
      title,
      author,
      category, // Include the category in the book object
    }));

    // Reset form fields
    setTitle('');
    setAuthor('');
    setCategory(''); // Reset the category
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title:
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="author">
        Author:
        <input
          type="text"
          placeholder="Book Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="category">
        Category:
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-fiction">Non-fiction</option>
          <option value="Biography">Biography</option>
          <option value="History">History</option>
          <option value="Science">Science</option>
        </select>
      </label>
      <br />
      <button type="submit">Create Book</button>
    </form>
  );
}

export default CreateBook;
