import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkCategories: () => 'Under construction',
  },
});

export const { checkCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
