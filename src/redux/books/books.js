const ADD_BOOK = 'redux-bookstore/src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'redux-bookstore/src/redux/books/REMOVE_BOOK';
const SET_LIST = 'redux-bookstore/src/redux/books/SET_LIST';
const initialState = [];

export const setList = (payload) => ({
  type: SET_LIST,
  payload,
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
    case SET_LIST: {
      const books = Object.entries(action.payload).map(([key, value]) => ({
        item_id: key,
        title: value[0].title,
        category: value[0].category,
      }));
      return books;
    }
    case ADD_BOOK:
      return [
        ...state,
        {
          title: action.payload.title,
          item_id: action.payload.item_id,
          category: action.payload.category,
        },
      ];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.item_id !== action.item_id)];
    default:
      return state;
  }
};

export default reducer;
