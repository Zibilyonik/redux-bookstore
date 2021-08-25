import React from 'react';
import BookItem from './BookItem';

const BooksList = () => {
  const books = [
    { id: 1, title: 'Book1', author: 'Adam' },
    { id: 2, title: 'Book2', author: 'Bethany' },
    { id: 3, title: 'Book3', author: 'Cain' },
  ];
  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </ul>
  );
};

export default BooksList;
