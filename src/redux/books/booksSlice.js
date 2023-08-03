import { createSlice } from '@reduxjs/toolkit';
import { getBooks, addBooks, deleteBooks } from '../../API/Apifunc';

// Universal Function;
function Slice(key, [element]) {
  return {
    id: key,
    title: element.title,
    category: element.category,
    author: element.author,
  };
}

// Initial State;
const initialState = {
  books: [],
  isLoading: false,
  length: 0,
  hasError: false,
  errorMessage: '',
};

const bookslice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => ({
        ...state,
        isLoading: true,
        hasError: false,
        errorMessage: '',
      }))
      .addCase(getBooks.fulfilled, (state, action) => {
        const itemKeys = Object.keys(action.payload);
        const books = itemKeys.map((key) => Slice(key, action.payload[key]));

        return {
          ...state,
          books,
          length: books.length,
          isLoading: false,
          hasError: false,
          errorMessage: '',
        };
      })
      .addCase(getBooks.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        hasError: true,
        errorMessage: action.payload,
      }))
      .addCase(deleteBooks.pending, (state) => ({
        ...state,
        isLoading: true,
        hasError: false,
        errorMessage: '',
      }))
      .addCase(deleteBooks.fulfilled, (state) => ({
        ...state,
        isLoading: false,
        hasError: false,
        length: state.length - 1,
        errorMessage: '',
      }))
      .addCase(deleteBooks.rejected, (state, action) => ({
        ...state,
        hasError: true,
        errorMessage: action.payload,
      }))
      .addCase(addBooks.pending, (state) => ({
        ...state,
        isLoading: true,
        errorMessage: '',
        hasError: false,
      }))
      .addCase(addBooks.fulfilled, (state) => ({
        ...state,
        isLoading: false,
        length: state.length + 1,
        hasError: false,
      }))
      .addCase(addBooks.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        hasError: true,
        errorMessage: action.error.message,
      }));
  },
});

export default bookslice.reducer;
