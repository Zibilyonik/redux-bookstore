import React from 'react';
import PropTypes from 'prop-types';

const BookItem = (props) => {
  const { title, key } = props;

  return (
    <div id={`Book-${key}`}>
      <h1>{title || ''}</h1>
      <h2>{key || ''}</h2>
      <button type="button" className="remove-button" name="removeBook">Remove Book</button>
    </div>
  );
};
BookItem.defaultProps = {
  title: 'BookTemplate',
  key: 1,
};
BookItem.propTypes = {
  title: PropTypes.string,
  key: PropTypes.number,
};
export default BookItem;
