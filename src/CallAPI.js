import axios from 'axios';

const APP_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7xoWyxnOfMsU9ezb1XQy/books';
const getBooks = async () => {
  try {
    const response = await axios.get(APP_URL);
    const books = response.data;
    return books;
  } catch (e) {
    return [];
  }
};

const postBook = async (book) => {
  try {
    const response = await axios.post(APP_URL, {
      item_id: book.id,
      title: book.title,
      category: book.category,
    });
    return response.data;
  } catch (e) {
    return e;
  }
};

const removeBook = async (id) => {
  try {
    const response = await axios.delete(`${APP_URL}/${id}`, {
      item_id: id,
    });
    return response.data;
  } catch (e) {
    return e;
  }
};

export {
  getBooks, postBook, removeBook, APP_URL,
};
