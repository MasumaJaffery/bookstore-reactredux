import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooks } from '../API/Apifunc';
import BookList from './BookList';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const handleAddBook = (e) => {
    e.preventDefault();
    if (category === 'category' || !title) return;
    const newBook = {
      item_id: new Date().getTime(),
      title,
      author,
      category,
    };

    dispatch(addBooks(newBook)); // Dispatch the action to add a book
    setCategory('category');
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <div>
        <form onSubmit={handleAddBook}>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
      <BookList />
    </>
  );
}

export default AddBook;
