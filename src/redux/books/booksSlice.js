import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

// Replace 'YOUR_APP_ID' with your actual app id
const APP_ID = 'bb9KfC79mKUeFQwcFRIx';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(`${API_BASE_URL}/${APP_ID}/books`);
  const books = Object.keys(response.data).map((id) => ({
    id,
    ...response.data[id][0],
  }));
  return books;
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await axios.post(`${API_BASE_URL}/${APP_ID}/books`, book);
  return { ...book, id: response.data };
});

export const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
  await axios.delete(`${API_BASE_URL}/${APP_ID}/books/${bookId}`);
  return bookId;
});

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => action.payload)
      .addCase(addBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const index = state.findIndex((book) => book.id === action.payload);
        if (index !== -1) {
          state.splice(index, 1);
        }
      });
  },
});

export default booksSlice.reducer;
