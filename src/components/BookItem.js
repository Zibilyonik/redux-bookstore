import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookItem = (props) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(removeBook(e.target.parentNode.id));
  };
  const { title, id, author } = props;

  return (
    <div id={id}>
      <h1>{title || ''}</h1>
      <h2>{author || ''}</h2>
      <button type="button" className="remove-button" name="removeBook" onClick={handleClick}>Remove Book</button>
    </div>
  );
};

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default BookItem;
