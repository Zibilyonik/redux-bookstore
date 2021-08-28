import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './Books.css';
import BookItem from './BookItem';
import { setList } from '../redux/books/books';
import { APP_URL } from '../CallAPI';

const BooksList = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  const loadBooks = async () => {
    const books = await axios.get(`${APP_URL}`);
    dispatch(setList(books.data));
  };
  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div className="mx-auto books-container-style border-bottom">
      <ul className="row p-0">
        {books.map((book) => (
          <BookItem
            key={book.item_id}
            item_id={book.item_id}
            title={book.title}
            category={book.category}
          />
        ))}
      </ul>
    </div>
  );
};

BooksList.defaultProps = {
  books: [{
    title: 'Books',
    category: 'Go Here',
    item_id: 13246,
  }],
};

export default BooksList;
