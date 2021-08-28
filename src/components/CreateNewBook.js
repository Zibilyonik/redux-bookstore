import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './CreateNewBook.css';
import { addBook } from '../redux/books/books';
import { APP_URL } from '../CallAPI';

const CreateNewBook = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const submitBookToStore = async (book) => {
    try {
      await axios.post(APP_URL, book);
      dispatch(addBook(book));
      return book;
    } catch (e) {
      return e;
    }
  };
  const handleSubmit = () => {
    const newBook = {
      item_id: Date.now(),
      title,
      category,
    };
    submitBookToStore(newBook);
    return newBook;
  };
  return (
    <form className="form-container py-4 px-4 mx-4">
      <h3 className="book-form-title-style">ADD NEW BOOK</h3>
      <input
        id="TitleInput"
        type="text"
        className="input-text"
        placeholder="Book Title"
        name="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        id="CategoryInput"
        type="text"
        className="input-text w-25 me-3"
        placeholder="Book Category"
        name="Category"
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="button" className="input-submit btn btn-primary" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default CreateNewBook;
