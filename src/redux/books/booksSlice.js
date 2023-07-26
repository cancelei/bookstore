import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  Title: '',
  Author: '',
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { id, Title, Author } = action.payload;
      state.id = id;
      state.Title = Title;
      state.Author = Author;
    },
    removeBook: (state, action) => {
      const { id } = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
