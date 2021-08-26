import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BooksList = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </ul>
  );
};

BooksList.defaultProps = {
  books: [{
    title: 'Books',
    author: 'Go Here',
    id: 'Template ID',
  }],
};

export default BooksList;
