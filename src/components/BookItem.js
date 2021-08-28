/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookItem } from '../redux/reduxapi';

const BookItem = (props) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(removeBookItem(e.target.parentNode.id));
    e.target.parentNode.remove();
  };
  const { title, item_id, category } = props;

  return (
    <div id={item_id}>
      <h1>{title || ''}</h1>
      <h2>{category || ''}</h2>
      <button type="button" className="remove-button" name="removeBook" onClick={handleClick}>Remove Book</button>
    </div>
  );
};

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  item_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};
export default BookItem;
