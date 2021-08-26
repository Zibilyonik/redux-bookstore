import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from './redux.books.books';

const dispatch = useDispatch();
const submitBookToStore = (title, author) => {
  const newBook = {
    key: uuidv4(),
    title,
    author,
  };
  dispatch(addBook(newBook));
};
const handleSubmit = (e) => {
  submitBookToStore(e.target.title.value, e.target.author.value);
};

const CreateNewBook = () => (
  <form className="form-container" onSubmit={handleSubmit}>
    <input
      id="TitleInput"
      type="text"
      className="input-text"
      placeholder="Book Title:"
      name="title"
    />
    <input
      id="AuthorInput"
      type="text"
      className="input-text"
      placeholder="Book Author:"
      name="author"
    />
    <button type="submit" className="input-submit">Submit</button>
  </form>
);

export default CreateNewBook;
