import { uiActions } from './ui-slice';
import { bookActions } from './book-slice';

export const fetchBookData = (url) => {
  return async (dispatch) => {
    dispatch(uiActions.toggle());
    const fetchData = async () => {
      const response = await fetch(
        url
      );

      if (!response.ok) {
        throw new Error('Could not fetch books data!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const bookData = await fetchData();
      dispatch(
        bookActions.getBooks({
          books: bookData.results || [],
          nextPage: bookData.next,
          previousPage: bookData.previous,
        })
      );

      dispatch(uiActions.toggle())
    } catch (error) {
      console.log(error);
    }
  };
};

