import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const CreateNewBook = () => {
  const dispatch = useDispatch();
  const submitBookToStore = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    return newBook;
  };
  const handleSubmit = (e) => {
    const titleInput = e.target.parentNode.firstChild;
    dispatch(addBook(submitBookToStore(titleInput.value, titleInput.nextSibling.value)));
  };
  return (
    <form className="form-container">
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
      <button type="button" className="input-submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default CreateNewBook;
