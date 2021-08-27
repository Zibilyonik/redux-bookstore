const ADD_BOOK = 'redux-bookstore/src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'redux-bookstore/src/redux/books/REMOVE_BOOK';
const SET_LIST = 'redux-bookstore/src/redux/books/SET_LIST';
const initialState = [];

export const setList = () => ({
  type: SET_LIST,
});
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
    case SET_LIST: return action;
    case ADD_BOOK:
      return [
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
