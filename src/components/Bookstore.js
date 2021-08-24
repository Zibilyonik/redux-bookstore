import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BooksList from './BooksList';

const Bookstore = () => {
  const getBooks = () => [
    { id: 1, name: 'Book1' },
    { id: 2, name: 'Book2' },
    { id: 3, name: 'Book3' },
  ];
  const [books, setBooks] = useState(getBooks());
  const delBooks = (id) => {
    setBooks([
      ...books.filter((book) => book.id !== id),
    ]);
  };
  return (
    <BooksList books={books} delBookProps={delBooks} />
  );
};

export default Bookstore;
