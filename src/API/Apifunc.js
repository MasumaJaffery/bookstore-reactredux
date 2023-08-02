import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
/*  npm install axios
 Axios is a popular JavaScript library used for making
HTTP requests process simplify like supports Promise based API. */
const BaseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const id = 'Mmy70lrcpxOYw0hyZQfR';
const Url = `${BaseUrl}/${id}/books`;
