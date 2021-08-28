/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookItem } from '../redux/reduxapi';
import './Books.css';
import progressBar from './BookProgressBar.png';

const BookItem = (props) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(removeBookItem(e.target.parentNode.id));
    e.target.parentNode.remove();
  };
  const { title, item_id, category } = props;

  return (
    <div id={item_id} className="col-11 mx-auto border my-2 rounded py-4 px-4 book-card-style row ps-0">
      <div className="col-6">
        <h4 className="category-display-style">{category || ''}</h4>
        <h1 className="title-display-style">{title || ''}</h1>
        <p className="author-display-style">Author</p>
        <div className="mt-4">
          <p className="remove-button-style d-inline pe-3 border-end ">Comments</p>
          <button type="button" className="remove-button-style mx-2 border-0" name="removeBook" onClick={handleClick}>Remove Book</button>
          <p className="remove-button-style d-inline border-start ps-3">Edit</p>
        </div>
      </div>
      <div className="col-1 mt-3 p-0">
        <img src={progressBar} alt="" />
      </div>
      <div className="col-2 pt-3 p-0 border-end">
        <h1 className="percentage-style">0%</h1>
        <h4 className="completed-style">Completed</h4>
      </div>
      <div className="col-3 pt-3 p-0 ps-5">
        <h4 className="completed-style mb-0">CURRENT CHAPTER</h4>
        <h3 className="chapter-style">Introduction</h3>
        <button type="button" className="update-progress-button-style btn btn-primary p-0 mt-2">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  item_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};
export default BookItem;
