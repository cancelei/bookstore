import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import styles from '../styles/CreateBook.module.css'; // Import the styles

function CreateBook() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookId = uuid();
    dispatch(
      addBook({
        item_id: bookId,
        title,
        author,
        category,
      }),
    );

    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className={styles.createContainer}>
      <h3 className={styles.addBookTitle}>ADD A BOOK</h3>
      <form onSubmit={handleSubmit} className={styles.createBookForm}>
        <label htmlFor="title" className={styles.label}>
          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
          />
        </label>
        <label htmlFor="author" className={styles.label}>
          <input
            type="text"
            placeholder="Book Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className={styles.input}
          />
        </label>
        <label htmlFor="category" className={styles.label}>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={styles.select}
          >
            <option value="">Select a category</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-fiction">Non-fiction</option>
            <option value="Biography">Biography</option>
            <option value="History">History</option>
            <option value="Science">Science</option>
          </select>
        </label>
        <button type="submit" className={styles.button}>
          Create Book
        </button>
      </form>
    </div>
  );
}

export default CreateBook;
