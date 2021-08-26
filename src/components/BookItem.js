import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const dispatch = useDispatch();

const handleClick = (e) => {
  dispatch(removeBook(e.target.parentNode.id));
};

const BookItem = (props) => {
  const { title, key, author } = props;

  return (
    <div id={key}>
      <h1>{title || ''}</h1>
      <h2>{author || ''}</h2>
      <button type="button" className="remove-button" name="removeBook" onClick={handleClick}>Remove Book</button>
    </div>
  );
};

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  key: PropTypes.number.isRequired,
};
export default BookItem;
