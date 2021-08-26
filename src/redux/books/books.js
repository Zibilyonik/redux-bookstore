const ADD_BOOK = 'redux-bookstore/src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'redux-bookstore/src/redux/books/REMOVE_BOOK';
const initialState = {
  books: [],
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: return {
      ...state,
      books: [...state.books, action.payload],

    };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.key !== action.payload.key),
      };
    default:
      return state;
  }
};

export default reducer;
