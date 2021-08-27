const ADD_BOOK = 'redux-bookstore/src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'redux-bookstore/src/redux/books/REMOVE_BOOK';
const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: return [
      ...state,
      {
        title: action.payload.title,
        id: action.payload.id,
        author: action.payload.author,
      },
    ];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.id)];
    default:
      return state;
  }
};

export default reducer;
