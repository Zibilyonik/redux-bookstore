import React from 'react';
import PropTypes from 'prop-types';

const BookItem = (props) => {
  const { title, id } = props;

  return (
    <div>
      <h1>{title || ''}</h1>
      <h2>{id || ''}</h2>
    </div>
  );
};
BookItem.defaultProps = {
  title: 'BookTemplate',
  id: 1,
};
BookItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
};
export default BookItem;
