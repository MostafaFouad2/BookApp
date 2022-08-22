import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    books: [],
    url: 'http://gutendex.com/books',
    nextPage: 'http://gutendex.com/books/?page=2',
    previousPage: null,
  },
  reducers: {
    getBooks(state, action) {
      state.previousPage = action.payload.previousPage;
      state.nextPage = action.payload.nextPage;
      state.books = action.payload.books;
    },
    nextPage(state) {
      if(state.nextPage != null){
        state.url = state.nextPage;
      }else{
        return
      }
      
    },
    previousPage(state) {
      if(state.previousPage != null){
        state.url = state.previousPage;
      }else{
        return
      }
      
    },
    urlBooks(state, action) {
      state.url = action.payload.url;
    },
    
  },
});

export const bookActions = bookSlice.actions;

export default bookSlice;
