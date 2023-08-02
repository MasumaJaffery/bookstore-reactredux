import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
/*  npm install axios
 Axios is a popular JavaScript library used for making
HTTP requests process simplify like supports Promise based API. */
const BaseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const id = 'Mmy70lrcpxOYw0hyZQfR';
const Url = `${BaseUrl}/${id}/books`;
// Getting All Books
const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const response = await axios(Url);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
});
