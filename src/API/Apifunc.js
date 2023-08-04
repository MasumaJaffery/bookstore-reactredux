import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
/*  npm install axios
 Axios is a popular JavaScript library used for making
HTTP requests process simplify like supports Promise based API. */
const BaseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const id = 'Mmy70lrcpxOYw0hyZQfR';
const Url = `${BaseUrl}/${id}/books`;
// Getting All Books
/* createAsyncThunk will always return a resolved promise
 with either the fulfilled action object or rejected action object */
export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const response = await axios(Url);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
});
// Add Books
// Add Books
export const addBooks = createAsyncThunk('books/addBooks', async (book) => {
  try {
    const response = await axios.post(Url, book);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
});

// Delete Books
export const deleteBooks = createAsyncThunk('books/deleteBooks', async (bookId) => {
  try {
    const response = await axios.delete(`${Url}/${bookId}`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
});
