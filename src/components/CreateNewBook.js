import React from 'react';

const CreateNewBook = () => (
  <form className="form-container">
    <input
      type="text"
      className="input-text"
      placeholder="Book Title:"
      name="title"
    />
    <input
      type="text"
      className="input-text"
      placeholder="Book Author:"
      name="author"
    />
    <button type="button" className="input-submit">Submit</button>
  </form>
);

export default CreateNewBook;
