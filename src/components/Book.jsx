import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import bookListStyles from '../styles/BookList.module.css';

function Book({
  book: {
    id, title, author, category,
  },
}) {
  const dispatch = useDispatch();
  return (
    <div className={bookListStyles.bookContainer}>
      {/* Book Information and Removal Button */}
      <div className={bookListStyles.bookInnerContainer}>
        {/* Book Details */}
        <div className={bookListStyles.bookDetails}>
          <div className={bookListStyles.bookCategory}>{category}</div>
          <span className={bookListStyles.bookTitle}>{title}</span>
          <div className={bookListStyles.bookAuthor}>{author}</div>

          {/* Removal Button */}
          <div className={bookListStyles.bookButtons}>
            <button type="submit" className={bookListStyles.bookButton}>Comments</button>
            <div className={bookListStyles.divider} />
            <button type="submit" className={bookListStyles.bookButton}>Edit</button>
            <div className={bookListStyles.divider} />
            <button
              type="submit"
              className={bookListStyles.bookButton}
              onClick={() => dispatch(removeBook(id))}
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      {/* Book Reading Progress */}
      <div className={bookListStyles.ovalContainer}>
        <div className={bookListStyles.oval}>
          <div className={bookListStyles.ovalInner} />
        </div>
        <div className={bookListStyles.progressInfo}>
          <div className={bookListStyles.percentage}>64%</div>
          <div className={bookListStyles.completed}>Completed</div>
        </div>
      </div>

      {/* Current Chapter Information and Update Button */}
      <div className={bookListStyles.currentContainer}>
        <div className={bookListStyles.currentChapter}>Current Chapter</div>
        <div className={bookListStyles.currentChapterTitle}>Chapter 17</div>
        <button type="submit" className={bookListStyles.updateButton}>Update Progress</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
