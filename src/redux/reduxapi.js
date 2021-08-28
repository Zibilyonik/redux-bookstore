import { getBooks, postBook, removeBook } from '../CallAPI';

const SET_LIST = 'bookStore/books/SET_LIST';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
export const setList = (books) => ({
  type: SET_LIST,
  books,
});

export const removeItem = (books) => ({
  type: REMOVE_BOOK,
  books,
});

export const getBooksList = () => (dispatch) => {
  getBooks().then((books) => {
    dispatch(setList(books));
    return books;
  });
};

export const addBook = (book) => (dispatch) => {
  postBook(book).then((response) => {
    if (response === 'Created') {
      dispatch(postBook(book));
    }
    return response;
  });
};

export const removeBookItem = (book) => (dispatch) => {
  removeBook(book).then((response) => {
    if (response === 'The book was deleted successfully!') {
      dispatch(removeItem(book));
    }
    return response;
  });
};
