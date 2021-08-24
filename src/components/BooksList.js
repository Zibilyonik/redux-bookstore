import React from 'react';
import BookItem from './BookItem';

const BooksList = () => {
  const books = [
    { id: 1, title: 'Book1' },
    { id: 2, title: 'Book2' },
    { id: 3, title: 'Book3' },
  ];
  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book.id}
          title={book}
        />
      ))}
    </ul>
  );
};

export default BooksList;
